import express  from "express";
import userAuth from "../middleware/authMiddleware.js";
import {getAlljobs, jobController} from '../Controller/jobController.js'

const Router = express.Router();

Router.post('/job-create',userAuth,jobController);

Router.get('/get-job',userAuth,getAlljobs);

Router.patch('/update')

export default Router;