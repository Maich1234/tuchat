import {Router} from "express"
import Signup from "../controllers/auth/signup.controller.js";
import validateReg from "../middlewares/reg.mid.js";
import Login from "../controllers/auth/signin.js";
import validateLogin from "../middlewares/login.mid.js"
import Logout from "../controllers/auth/logout.js";

const router = Router();
router.post("/signup", validateReg,Signup)
router.post("/login", validateLogin, Login)
router.post("/logout", Logout)


export default router;