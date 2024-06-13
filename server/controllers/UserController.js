const { default: mongoose } = require('mongoose');
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
    const {username, password, email } = req.body;

    // add to db
    try {
        const newUser = await User.create({username, password, email });
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json(error);
    }
}

// delete a user
const deleteUser = async (req, res) => {
    const { id } = req.params;

    // if(!user){
    //     return res.status(404).json({mssg: 'User not found'});
    // }
    //
    // res.status(200).json({mssg: 'User deleted successfully'});
    
    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'User not found'});
    }

    const user = await User.findOneAndDelete({_id: id});

    if(!user){
        return res.status(404).json({mssg: 'User not found'});
    }

    res.status(200).json({mssg: 'User deleted successfully', user: user, id: id});
}

// update a user
const updateUser = async (req, res) => {
    const { id } = req.params;

    if(!mongoose.Types.ObjectId.isValid(id)){
        return res.status(404).json({mssg: 'User not found'});
    }

    const user = await User.findOneAndUpdate({_id: id}, {
        ...req.body
    })

    if(!user){
        return res.status(404).json({mssg: 'User not found'});
    }

    res.status(200).json({mssg: 'User updated successfully'});

}


module.exports = {
    getAllUsers,
    getSingleUser,
    createUser,
    deleteUser,
    updateUser,
}
