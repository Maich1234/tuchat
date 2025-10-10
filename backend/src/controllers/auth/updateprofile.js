import cloudinary from "../../lib/cloudinary.js";
import User from "../../models/user.model.js";

export default async function updateProfile(req, res){
    try{
        const {profilePic} = req.body;
    if(!profilePic) return res.status(400).json({message:"Profile pic is required"})
    const userId = req.user._id
const uploadResponse = await cloudinary.uploader.upload(profilePic)
const updatedUser =  await User.findByIdAndUpdate(userId, {profilePic:uploadResponse.secure_url}, {new:true}).select("-password");
 return res.status(200).json({message: "User updated successfully", user: updatedUser})
    }catch(eer){
        return res.status(200).json({message: "An error occurred"})
    }

}