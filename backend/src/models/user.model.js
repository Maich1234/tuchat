import mongoose from "mongoose";
const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        minlength: 6,
        required: true,
    },
    fullName: {
        type: String,
        required: true
        
    },
    profilePic: {
        type:String,
        default: ""
    },
}, {timestamps: true, versionKey: false});

const User = mongoose.model("User", UserSchema)
export default User;