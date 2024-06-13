const express = require('express');
const{
    createUser,
    getAllUsers,
    getSingleUser,
    deleteUser,
    updateUser,
} = require('../controllers/UserController');

const router = express.Router();


// Get all users
router.get('/', getAllUsers);

// Get 1 user
router.get('/:id', getSingleUser);

// Post a user
router.post('/', createUser);


// Delete a user
router.delete('/:id', deleteUser);


// Update user
router.patch('/:id', updateUser);

module.exports = router
