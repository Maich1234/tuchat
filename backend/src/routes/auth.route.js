import {Router} from "express"

const router = Router();
router.get("/signup", (req,res)=>{
    console.log("hello route")
    res.send("SignUp route")
})


export default router;