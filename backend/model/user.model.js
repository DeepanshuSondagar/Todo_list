import mongoose from "mongoose";

const  userSchema = new mongoose.Schema({
    name:{
        type:"String",
        required: [true, "Name is required"]
    },
    email:{
        type:"String",
        required:[true, "Email is required"],
        unique: true,
        lowercase: true,
        trime: true
    },
    password:{
        type:"String",
        required:[true, "Password must be 6 characters long"]
    }
},
    {timestamps: true }
)

export const User = mongoose.model("User", userSchema)

export default User;