import Message from "../../models/message.model.js"
export default async function getMessagesByUserId(req, res){
    try{
        const myId = req.user._id;
        const {id:userToChatId} = req.params;
        const messages = await Message.find({
            $or: [
                {senderId:myId, recieverId:userToChatId},
                {senderId:userToChatId, recieverId:myId},
            ]
        });
        res.status(200).json(messages)

    }catch(err){
        return res.status(500),json({message: "Internal server error"})
    }
}