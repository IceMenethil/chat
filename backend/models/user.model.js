import mongoose from "mongoose";

const UserSchema = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    userName: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 6,
    },
    gender: {
        type: String,
        required: true,
        enum: ['male', 'female']
    },
    profilePicture: {
        type: String,
        default: ''
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;