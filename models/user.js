import mongoose, { mongo } from "mongoose";
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is requried"]
    },
    email:{
        type:String,
        required:[true,"Email is requried"]
    },
    password:{
      type:String,
      required:[true,"password is requried"]
    },
    location:{
        type:String,
        default:"India",
    },
},{timestamps:true}
)

//hashing
userSchema.pre('save',async function() {
    if(! this.isModified()) return;
  const salt=await bcrypt.genSalt(10)
  this.password=await bcrypt.hash(this.password,salt);
})

//jwt


// userSchema.methods.createJWT = function() {
//     return jwt.sign({ userId: this._id }, process.env.JWT_SECRET);
// };


export default mongoose.model('user',userSchema);