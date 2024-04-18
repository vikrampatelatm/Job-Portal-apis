import express from 'express';
import mongoose from 'mongoose';

const jobSchema = new mongoose.Schema({
    company:{
    type:String,
    required:[true,'compnay name is requried']
    },
    postion:{
       type:String,
       required:[true,'postion is requried']
    },
    status:{
       type:String,
       enum:['pending','rejected','interview'],
       default:'pending'
    },
    worktype:{
        type:String,
        enum:['full-time','internship','contractor'],
        default:'full-time'
    },
    worklocation:{
        type:String,
        default:'mumbai',
        required:[true,'Work location is requried']
    },
    createdby:{
        type:mongoose.Types.ObjectId,
        ref: 'user'
    }

},{timestamps:true})

export default mongoose.model('job',jobSchema);