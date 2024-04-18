import jwt from 'jsonwebtoken';

const userAuth = async (req, res, next) => {
   const authHeader = req.headers.authorization;
   if (!authHeader || !authHeader.startsWith('Bearer')) {
      return res.status(401).json({ success: false, message: 'Authorization header missing or invalid' });
   }
   
   const token = authHeader.split(" ")[1];

   try {
       const payload = jwt.verify(token,process.env.JWT_SECRET); 
       req.user = { userId: payload.userId };
       next();
   } catch (error) {
       console.error('JWT verification error:', error.message);
       return res.status(403).json({ success: false, message: 'Invalid token' });
   }
}

export default userAuth;
