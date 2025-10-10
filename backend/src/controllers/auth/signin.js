import bcrypt from "bcryptjs";
import User from "../../models/user.model.js";
import { generateToken } from "../../lib/utils.js";

export default async function Login(req, res){
    const {password, email} = req.body;
    try{
        const user = await User.findOne({email});
        if(!user) return  res.status(400).json({message:"Invalid Credentials"})
        const ispasswordCorrect = await bcrypt.compare(password, user.password);
        if(!ispasswordCorrect) return  res.status(400).json({message:"Invalid Credentials"})
        generateToken(user._id, res);
        return res.status(200).json({
            _id:user._id,
            fullName: user.fullName,
            email: user.email,
            profilePic: user.profilePic
        });
    } catch(err){
        console.log("error in login", err);
        res.status(500).json({message:"Internal server error"})
    }
}