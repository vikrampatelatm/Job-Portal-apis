import userModel from '../models/user.js'
import jwt from 'jsonwebtoken';

const registerController = (req,res)=>{
    console.log('register');
    
    const {name,email,password}=req.body;
    
    const user =  userModel.create({name,email,password})
    
    const payload = {
    userId: name, 
    username: email, 
    role: password 
};


const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

    res.status(200).send({
        success:true,
        message:"user created ",
        user,
        token
    });  
}

export default registerController;

