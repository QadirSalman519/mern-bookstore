import User from "../model/user.model.js";
import bcryptjs from "bcryptjs" 

export const signUp = async (req,resp)=>{
    try {
        const {name,email,password} = req.body
        const user = await User.findOne({email})
        if(user){
            return resp.status(400).json({message: 'User exists'})
        }

        const hashPassword = await bcryptjs.hash(password,10)

        const createdUser = new User({
            name:name,
            email:email,
            password:hashPassword
        })
        await createdUser.save()
        return resp.status(200).json({message:'User Created Successfully!'})
    } catch (error) {
        console.log(error)
        return resp.status(500).json({message:'Internal Server Error',error:error})
    }
}

export default signUp