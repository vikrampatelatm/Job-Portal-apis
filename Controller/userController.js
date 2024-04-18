import express from 'express';
import User from '../models/user.js';
import jwt from 'jsonwebtoken'

const userController = async(req,res)=>{
     const {name,email,password,location} = req.body;

     if(!name || !email || !password || !location)
     {
        res.send('pls provide all fields');
     }
     const user =await User.findOne({email});
     console.log(user.name);
     user.name=name;
     user.password=password;
     user.location=location;

     await user.save();

     const payload = {
        userId: name, 
        username: email, 
        role: password 
    };
    
    
    const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).json({
        user,
        token,
    })
}

export default userController;