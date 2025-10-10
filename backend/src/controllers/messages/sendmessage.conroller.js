import cloudinary from "../../lib/cloudinary.js";
import Message from "../../models/message.model.js";

export default async function sendMessage(req, res) {
    try {
        const { text, image } = req.body;
        const { id: recieverId } = req.params;
        const senderId = req.user._id;
        if (!text && !image) {
            return res.status(400).json({ message: "Text or image is required." });
        }
        if (senderId.equals(recieverId)) {
            return res.status(400).json({ message: "Cannot send messages to yourself." });
        }
        const receiverExists = await User.exists({ _id: receiverId });
        if (!receiverExists) {
            return res.status(404).json({ message: "Receiver not found." });
        }
        let imageUrl;
        if (image) {
            const uploadResponse = await cloudinary.uploader.upload(image);
            imageUrl = uploadResponse.secure_url;
        }
        const newMessage = new Message({
            senderId,
            recieverId,
            text,
            image: imageUrl
        });
        await newMessage.save();
        res.status(200).json(newMessage)
        //todo: realtime functionality if user is online
    } catch (err) {
        console.log("an error in send message controler", err)
        return res.status(500).json({ message: "Internal server error" })
    }
}