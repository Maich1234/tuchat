import { create } from "zustand";
import axiosInstance from "../lib/axios";
import toast from "react-hot-toast"
const useAuthStore = create((set)=>({
    authUser: null,
    isCheckingAuth: true,

    isSigningUp: false,
    checkAuth: async()=>{
        try{
            const res = await axiosInstance.get("/auth/check")
            console.log("fetched",res.data, import.meta.env.MODE)
            set({authUser: res.data})
        }catch(err){
            console.log("error in checking auth ", err)
            set({authUser: null})
        }finally{
            set({ isCheckingAuth: false})
        }
    },
    signUp:async(data)=>{
        try{
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser:res.data})
            toast.success("Signup successful")
        } catch(err){
            console.log("error signing up",err)
            toast.error(err.response.data.message || "Error signing up...")
        }
    }
}))

export default useAuthStore;