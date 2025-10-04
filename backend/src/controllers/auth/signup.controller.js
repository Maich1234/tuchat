import HassPassword from "../../lib/hashpassword.js";
import { generateToken } from "../../lib/utils.js";
import User from "../../models/user.model.js"
export default async function Signup(req, res){
    const {fullName, email, password} = req.body;
    
    try{
        const user = await User.findOne({email});
        if (user) return res.status(400).json({message: "User already exist"});
        
        const pass = await HassPassword(password)
        const NewUser = new User({
            fullName: fullName,
            password:pass,
            email: email
        });

        if(NewUser){
            await NewUser.save()
            generateToken(NewUser._id, res);
            return res.status(201).json({
                _id:NewUser._id, fullName, email, profilePic: NewUser.profilePic
            })
        }else{
            res.status(400).json({message:"An error occurred. Check your inputs"})
        }
        //todo: send a welcome email to the user
    }catch(err){
        console.log("Error in signup controller", err);
        res.status(500).json({message:"Internal server error"})
        
    }
}