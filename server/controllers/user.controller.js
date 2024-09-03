import bcrypt from "bcryptjs";
import {v2 as cloudinary} from "cloudinary";
import nodemailer from "nodemailer";

//models
import User from "../models/user.model.js";
import Post from "../models/post.model.js";
import Notification from "../models/notification.model.js";

export const getAllUserProfile = async (req, res) => {
    try {
        const users = await User.find().select("-password");
        if(!users) {
            return res.status(404).json({ message: "No users found" });
        }
        res.status(200).json(users);
    } catch (error) {
        console.log("Error in getAllUserProfile: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const getUserProfile = async (req, res) => {
    const { username } = req.params;

    try {
        const user = await User.findOne({ username }).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error){
        console.log("Error in getUserProfile: ", error.message)
        res.status(500).json({error: error.message})
    }
};

export const getUserProfileWithID = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await User.findById(id).select("-password");
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        res.status(200).json(user);
    } catch (error) {
        console.log("Error in getUserProfileWithID: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params;
        const userToModify = await User.findById(id);
        const currentUser = await User.findById(req.user._id);

        if(id === req.user._id.toString()) {
            return res.status(400).json({ message: "You cannot follow/unfollow yourself" });
        }

        if(!userToModify || !currentUser) {
            return res.status(404).json({ message: "User not found" });
        }

        const isFollowing = currentUser.following.includes(id);
        if(isFollowing) {
            // Unfollow user
            await User.findByIdAndUpdate(id, { $pull: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $pull: { following: id } });
            // Send notification to user

            //TODO: Return the id of the user as a response
            res.status(200).json({ message: "User unfollowed successfully" });

        } else {
            // Follow user   
            await User.findByIdAndUpdate(id, { $push: { followers: req.user._id } });
            await User.findByIdAndUpdate(req.user._id, { $push: { following: id } });
            // Send notification to user
            const newNotification = new Notification({
                type: "follow", 
                from: req.user._id,
                to: userToModify._id,
            });

            await newNotification.save();

            //TODO: Return the id of the user as a response
            res.status(200).json({ message: "User followed successfully" });
        }

    } catch(error) {
        console.log("Error in followUnfollowUser: ", error.message)
        res.status(500).json({error: error.message})
    }
};

export const getSuggestedUsers = async (req, res) => {
    try {
        const userId = req.user._id;

        const usersFollowedByMe = await User.findById(userId).select("following");

        const users = await User.aggregate([
            {
                $match: {
                    _id: { $ne: userId },
                },
            },
            {
                $sample: { size: 10 },
            },
        ])
        const filteredUsers = users.filter(user => !usersFollowedByMe.following.includes(user._id));
        const suggestedUsers = filteredUsers.slice(0, 4);

        suggestedUsers.forEach((user) => {
            user.password = null;
        });

        res.status(200).json(suggestedUsers)

    } catch(error) {
        console.log("Error in getSuggestedUsers: ", error.message)
        res.status(500).json({error: error.message})
    }
};


export const updateUser = async (req, res) => {
    const {fullName, email, username, currentPassword, newPassword, bio, link} = req.body;
    let { profileImg, coverImg } = req.body;

    const userId = req.user._id;

    try {

        let user = await User.findById(userId);
        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }
        if((!newPassword && currentPassword) || (!currentPassword && newPassword)) {
            return res.status(400).json({ message: "Please provide both current and new password" });
        }
        if(currentPassword && newPassword) {
            const isMatch = await bcrypt.compare(currentPassword, user.password);
            if(!isMatch) {
                return res.status(400).json({ message: "Current password is incorrect" });
            }
            if(newPassword.length < 6) {
                return res.status(400).json({ message: "Password must be at least 6 characters long" });
            }
            const salt = await bcrypt.genSalt(10);
            user.password = await bcrypt.hash(newPassword, salt);
        }

        if(profileImg) {
            if(user.profileImg) {
                await cloudinary.uploader.destroy(user.profileImg.split("/").pop().split(".")[0]);
            }
            const uploadedResponse = await cloudinary.uploader.upload(profileImg);
            profileImg = uploadedResponse.secure_url;
        }
        if(coverImg) {
            if(user.coverImg) {
                await cloudinary.uploader.destroy(user.coverImg.split("/").pop().split(".")[0]);
            }
            const uploadedResponse = await cloudinary.uploader.upload(coverImg);
            coverImg = uploadedResponse.secure_url;
        }

        user.fullName = fullName || user.fullName;
        user.email = email || user.email;
        user.username = username || user.username;
        user.bio = bio || user.bio;
        user.link = link || user.link;
        user.profileImg = profileImg || user.profileImg;
        user.coverImg = coverImg || user.coverImg;

        user = await user.save();

        // password should not be sent to the client
        user.password = null;

        return res.status(200).json(user);

    } catch(error) {
        console.log("Error in updateUser: ", error.message)
        res.status(500).json({error: error.message})
    }
};

export const getFollowingUsers = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        const userFollowing = user.following;

        const followingUsers = await User.find({ _id: { $in: userFollowing } }).select("fullName username profileImg");

        if(!followingUsers) {
            return res.status(404).json({ message: "No users found" });
        }


        res.status(200).json(followingUsers);
    }
    catch(error) {
        console.log("Error in getFollowingUsers: ", error.message)
        res.status(500).json({error: error.message})
    }
};

export const getFollowerUsers = async (req, res) => {
    try {
        const userId = req.params.id;
        const user = await User.findById(userId);
        const userFollowers = user.followers;

        const followerUsers = await User.find({ _id: { $in: userFollowers } }).select("fullName username profileImg");

        if(!followerUsers) {
            return res.status(404).json({ message: "No users found" });
        }

        res.status(200).json(followerUsers);
    } catch (error) {
        console.log("Error in getFollowerUsers: ", error.message)
        res.status(500).json({error: error.message})
    }

}

export const addCart = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const userToModify = await User.findById(userId);

        if(!userToModify) {
            return res.status(404).json({ message: "User not found" });
        }

        const isAlreadyInCart = userToModify.cart.includes(id);

        if(isAlreadyInCart) {
            return res.status(404).json({ message: "Item already in cart" });
        }

        await User.findByIdAndUpdate(userId, { $push: { cart: id } });

        res.status(200).json({ message: "Item added to cart successfully" });

    } catch(error) {
        console.log("Error in addCart: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const getCart = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId).populate("cart");

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        res.status(200).json(user.cart);
    }
    catch(error) {
        console.log("Error in getCart: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const deleteCart = async (req, res) => {
    try {
        const { id } = req.params;
        const userId = req.user._id;
        const userToModify = await User.findById(userId );

        if(!userToModify) {
            return res.status(404).json({ message: "User not found" });
        }

        const isAlreadyInCart = userToModify.cart.includes(id);

        if(!isAlreadyInCart) {
            return res.status(404).json({ message: "Item not in cart" });
        }

        await User.findByIdAndUpdate(userId, { $pull: { cart: id } });

        res.status(200).json({ message: "Item removed from cart successfully" });

    } catch(error) {
        console.log("Error in deleteCart: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const deleteUser = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // find and delete all notifications related to the user
        await Notification.deleteMany({ $or: [{ from: userId }, { to: userId }] });
        
        // find and delete all posts related to the user
        await Post.deleteMany({ user: userId });

        await User.findByIdAndDelete(userId);

        res.status(200).json({ message: "User deleted successfully "});
    } catch(error) {
        console.log("Error in deleteUser: ", error.message)
        res.status(500).json({error: error.message})
    }
}

export const sendPaymentDetails = async (req, res) => {
    try {
        const userId = req.user._id;
        const user = await User.findById(userId);

        const cars = req.body.cars;
        const info = req.body.info;

        if(!user) {
            return res.status(404).json({ message: "User not found" });
        }

        if(!cars) {
            return res.status(404).json({ message: "No items in cart" });
        }

        const email = req.user.email;

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASSWORD,
            },
        });

        const mailOptions = {
            from: "AAP",
            to: email,
            subject: "Payment Details",
            html: `
                <h2>
                    Dear ${user.fullName},
                    Thank you for your recent purchase at AAP! We have received your order and are now processing it.
                </h2>
                <h3> 
                    Here are the details of your order:
                </h3>
                <h3> Order details </h3>
                <ul>
                    <li> Order ID: ${info.orderId}</li>
                    <li> Order Date: ${new Date().toLocaleDateString()}</li>
                    <li> Ship to: ${info.address}</li>
                    <li> Ship fee: 
                        ${Math.round(info.shippingCost)}$
                    </li>
                    <li> Payment method: ${info.paymentMethod} </li>
                    <li> Payment result: ${info.paymentResult} </li>
                    <li> Phone number: ${info.phone} </li>
                </ul>
                <h3> Payment details </h3>
                <table>
                      <tr>
                        <th> Brand + Model </th>
                        <th> Quantity </th>
                        <th> Price </th>
                      </tr>
                      ${cars.map(item => `
                        <tr>
                          <td>${item.brand}${item.model}</td>
                          <td>${item.quantity}</td>
                          <td>${item.price}</td>
                        </tr>
                      `).join('')}
                      <tr>
                        <td colspan="2"><b>
                            Total Price:
                        </b></td>
                        <td><b>
                            ${(cars.reduce((total, item) => total + item.total, 0)) + Math.round(info.shippingCost)}$
                        </b></td>
                      </tr>
                </table>
            `,
        };

        await transporter.sendMail(mailOptions);

        // Send payment details to the user
        res.status(200).json({cars, info});
        // res.status(200).json(mailOptions);
    }
    catch(error) {
        console.log("Error in sendPaymentDetails: ", error.message)
        res.status(500).json({error: error.message})
    }
}
