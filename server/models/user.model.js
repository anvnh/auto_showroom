import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    username: {
        type: String, 
        require: true,
        unique: true
    },
    fullName: {
        type: String,
        require: true
    },
    password: {
        type: String,
        require: true,
        minLength: 6
    },
    email: {
        type: String,
        require: true,
        unique: true
    },
    isVerified: {
        type: Boolean,
        default: false
    },
    emailVerificationToken: {
        type: String,
        default: ""
    },
    emailVerificationTokenExpires: {
        type: Date,
        default: Date.now()
    },
    followers: [
        {
            type: mongoose.Schema.Types.ObjectId, // 16 characters
            ref: "User",
            default: []
        }
    ],
    following: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            default: []
        }
    ],
    profileImg: {
        type: String,
        default: "",
    },
    coverImg: {
        type: String, 
        default: "",
    },
    bio: {
        type: String,
        default: "",
    },
    link: {
        type: String,
        default: "",
    },
    likedPosts: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Post",
            default: []
        }
    ],
        
}, { timestamps: true });


const User = mongoose.model('User', userSchema);


export default User;









