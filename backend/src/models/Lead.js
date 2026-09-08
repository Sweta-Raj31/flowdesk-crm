import mongoose from 'mongoose';
const schema=new mongoose.Schema({name:{type:String,required:true},email:{type:String,required:true},company:{type:String,required:true},phone:String,status:{type:String,enum:['new','contacted','qualified','won','lost'],default:'new'},source:{type:String,default:'website'},owner:{type:mongoose.Schema.Types.ObjectId,ref:'User'}} ,{timestamps:true});
schema.index({status:1,createdAt:-1}); schema.index({owner:1,createdAt:-1}); schema.index({name:1,email:1,company:1});
export default mongoose.model('Lead',schema);
