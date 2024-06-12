const User = require('../models/UserModel');


// Get all user
const getAllUsers = async (req, res) => {
    const users = await User.find({}).sort({createdAt: -1});

    res.status(200).json(users);
}


// get a single user 
const getSingleUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findById(id);

    if(!user){
        return res.status(404).json({mssg: 'User not found'});
    }

    res.status(200).json(user);
}


// create a user
const createUser = async (req, res) => {
    const {username, password, email, phone} = req.body;

    // add to db
    try {
        const newUser = await User.create({username, password, email, phone});
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

// delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;
    const user = await User.findByIdAndDelete(id);

    if(!user){
        return res.status(404).json({mssg: 'User not found'});
    }

    res.status(200).json({mssg: 'User deleted successfully'});
}

// update a user



module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
}
