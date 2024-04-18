import jobSchema from '../models/job.js';

export const jobController = async(req,res)=>{
  const  {postion,company} = req.body;
  if(! company || ! postion){
    res.send()
  }
  req.body.createdby=req.user.userId
  const job = await jobSchema.create(req.body)
  res.status(200).json({job});
}

export const getAlljobs = async(req,res)=>{
   const jobs = await jobSchema.find({createdby:req.user.userId})
   res.status.json({
    totaljobs:jobs.length,
    jobs
   })
}
