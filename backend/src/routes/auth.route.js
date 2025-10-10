import {Router} from "express"
import Signup from "../controllers/auth/signup.controller.js";
import validateReg from "../middlewares/reg.mid.js";
import Login from "../controllers/auth/signin.js";
import validateLogin from "../middlewares/login.mid.js"
import Logout from "../controllers/auth/logout.js";
import {protectRoute} from "../middlewares/auth.mid.js";
import updateProfile from "../controllers/auth/updateprofile.js"
import arcjetProtection from "../middlewares/arcjet.mid.js";

const router = Router();
router.use(arcjetProtection);
router.post("/signup", validateReg,Signup);
router.post("/login", validateLogin, Login);
router.post("/logout", Logout);
router.put("/update-profile", protectRoute, updateProfile);
router.get("/check", protectRoute,(req, res)=> res.status(200).json(req.user))

export default router;