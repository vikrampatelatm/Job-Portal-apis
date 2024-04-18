//import 
import express from 'express';
import dotenv from 'dotenv';
import connectDB from './config/db.js';
import registerRoute from './Routes/authRoute.js';
import loginRoute from './Routes/loginRoute.js';
import testRoute from './Routes/testRoutes.js';
import userRoute from './Routes/userRoute.js';
import jobRoute from './Routes/jobRoute.js';

//app
const app = express();
dotenv.config();

connectDB();

//middlware
app.use(express.json());

//route
app.get('/',(req,res)=>{
    res.send("JOB PORTAL Lets go ");
});

app.use('/api/v1/test',testRoute);
app.use('/api',registerRoute);
app.use('/api/v1',loginRoute);
app.use('/api/v1/user',userRoute);
app.use('/api/v1/jobs',jobRoute);

//const PORT=8080;
app.listen(process.env.PORT,()=>{
    console.log(`server running at ${process.env.PORT}`);
})