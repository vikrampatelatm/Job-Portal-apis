import User from '../models/user.js'; //
import bcrypt from 'bcrypt'; 
import jwt from 'jsonwebtoken';


const loginController = async (req, res) => {
    const { email, password } = req.body;

    try {
        
        const user = await User.findOne({ email });

        console.log(user.name);

        
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

       
        const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET);

       
        res.status(200).json({
            success: true,
            message: 'Login successful',
            token,
            user: { _id: user._id, name: user.name, email: user.email } // Example user data
        });
    } catch (error) {
    
        console.error(error);
        res.status(500).json({ success: false, message: 'Server error' });
    }
};


export default loginController;
