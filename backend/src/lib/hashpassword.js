import bcrypt from "bcryptjs"
export default async function HassPassword (password){
    const salt = await bcrypt.genSalt(10);
    const hashedpass = await bcrypt.hash(password, salt)
    return hashedpass
}