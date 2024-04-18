import express from 'express';
import registerController from '../Controller/registerController.js'; // Import register controller
import loginController from '../Controller/loginController.js'; // Import login controller

const router = express.Router();

router.post('/register', registerController); // Route for registration
router.post('/login', loginController); // Route for login

export default router;
