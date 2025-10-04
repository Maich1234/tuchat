import {Router} from "express"
import Signup from "../controllers/auth/signup.controller.js";
import validateReg from "../middlewares/reg.mid.js";

const router = Router();
router.post("/signup", validateReg,Signup)


export default router;