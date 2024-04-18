import express from 'express';
import testRouteController from '../Controller/testController.js';
import userAuth from '../middleware/authMiddleware.js';

const router = express.Router();

router.post('/post',userAuth,testRouteController)

export default router;