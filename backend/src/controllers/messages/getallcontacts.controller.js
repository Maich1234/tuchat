import User from "../../models/user.model.js";

export default async function getAllContacts(req, res){
    try{
        const loggedinUserId = req.user._id;
        const filteredUsers = await User.find({_id:{$ne:loggedinUserId}}).select("-password")
        return res.status(200).json(filteredUsers)
    }catch(err){
        console.log("An error in getContacts controller", err)
        return res.status(500).json({message:"An internal server error occured"})
    }
}