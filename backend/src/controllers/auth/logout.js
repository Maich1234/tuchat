export default function Logout(_, res){
    try{
        res.cookie("jwt","", {maxAge:0})
    res.status(200).json({message:"Logged out successfully "})
    } catch(err){
        res.status(500).json({message: "Internal server error"})
    }
}