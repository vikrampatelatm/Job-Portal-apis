import express from 'express';
import userController from '../Controller/userController.js';


const Router=express.Router();

Router.put('/update',userController);

export default Router;