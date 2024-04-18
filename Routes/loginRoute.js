import express from 'express';
import loginController from  '../Controller/loginController.js';


const router = express.Router();
router.post('/login',loginController)

export default router;