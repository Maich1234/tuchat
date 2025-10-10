import { Router } from "express";
import getAllContacts from "../controllers/messages/getallcontacts.controller.js"
import { protectRoute } from "../middlewares/auth.mid.js";
import getMessagesByUserId from "../controllers/messages/getmessage.controller.js";
import sendMessage from "../controllers/messages/sendmessage.conroller.js";
import getChatPartners from "../controllers/messages/getchatpartners.js";
import arcjetProtection from "../middlewares/arcjet.mid.js";
const router =Router();

router.use(arcjetProtection,protectRoute)
router.get("/contacts", getAllContacts);
router.get("/chats", getChatPartners);
router.get("/:id", getMessagesByUserId);
router.post("/send/:id", sendMessage);



export default router
