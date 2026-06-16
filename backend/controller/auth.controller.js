import User from "../model/user.model.js"
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

 const generateToken = (userId) => {
            return jwt.sign(
                { userId },
                process.env.JWT_SECRET,
                { expiresIn: "7d" }
            );
            };

export const signup = async(req,res)=>{
    const {name, email, password} = req.body;
        try {
      if(!name || !email || !password){
        return res.status(400).json({message:"All fields are required"});
      }
       if(password.length < 6){
        return res.status(400).json({message:"Password must be 6 character"});
       }

       const existing = await User.findOne({email})
        if(existing) return res.status(400).json({message:"User already exists"});

       const salt = await bcrypt.genSalt(10);
       const hassedPassword = await bcrypt.hash(password, salt);
       
       const newUser = new User({
        name,
        email,
        password: hassedPassword,
       });

       newUser.save();

       const token = generateToken(newUser._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

       res.status(200).json({
        _id: newUser._id,
        name: newUser.name,
        email: newUser.email,
       })
            
        } catch (error) {
            console.log(user)
            console.log("Error in Signup controller", error.message);
            res.status(400).json({message:"Internal server error"});
        }
};

export const login = async(req,res)=>{
       const {  email, password} = req.body;
        try {
            const user = await User.findOne({email})
      if(!user){
        return res.status(400).json({message:"User already exists"});
      }
    

        const isPasswordCorrect = await  bcrypt.compare(password, user.password)
        if(!isPasswordCorrect){
            return res.status(500).json({message:"Invaild email or password "})
        }
     
 
       const token = generateToken(user._id);
        res.cookie("jwt", token, {
            httpOnly: true,
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

       res.status(200).json({
        _id: user._id,
        name: user.name,
        email: user.email,
       })
            
        } catch (error) {
            console.log("Error in Login controller", error.message);
            res.status(400).json({message:"Internal server error"});
        }
};

export const logout = async (req, res) => {
 try {
      res.clearCookie("jwt", { httpOnly: true, secure: process.env.NODE_ENV === "production" });
      res.status(200).json({ message: "Logged Out" });
 } catch (error) {
    console.log("Error in logout controller", error.message);
    res.status(500).json({ message: "Internal Server Error" });
 }
};