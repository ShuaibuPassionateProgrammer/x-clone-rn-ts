import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    clerkId: {
        type: String,
        required: true,
        unique: true,
    },

    firstName: {
        type: String,
        required: true,
    },

    lastName: {
        type: String,
        required: true,
    },

    userName: {
        type: String,
        required: true,
        unique: true,
    },

    profilePicture: {
        type: String,
        default: ""
    },

    bannerImage: {
        type: String,
        default: "",
    },

    bio: {
        type: String,
        default: "",
        maxLength: 160,
    }
}, { timestamps: true });

const User = mongoose.model("User", userSchema);
export default User;