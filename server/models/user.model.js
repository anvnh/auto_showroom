import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      require: true,
      unique: true,
    },
    fullName: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
      minLength: 6,
    },
    email: {
      type: String,
      require: true,
      unique: true,
    },
    isVerified: {
      type: Boolean,
      default: false,
    },
    confirmationToken: {
      type: String,
      default: "",
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    followers: [
      {
        type: mongoose.Schema.Types.ObjectId, // 16 characters
        ref: "User",
        default: [],
      },
    ],
    following: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        default: [],
      },
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
        default: [],
      },
    ],
    cart: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Car",
        default: [],
      },
    ],
    lastLogin: {
      type: Date,
      default: Date.now,
    },
    vouchers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voucher",
        default: [],
      },
    ],
    used_vouchers: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Voucher",
        default: [],
      },
    ],
    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Order",
        default: [],
      },
    ],
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

export default User;
