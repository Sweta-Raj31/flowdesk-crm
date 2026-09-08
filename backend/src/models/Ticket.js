import mongoose from 'mongoose';
const schema=new mongoose.Schema({subject:{type:String,required:true},description:String,priority:{type:String,enum:['low','medium','high'],default:'medium'},status:{type:String,enum:['open','in_progress','resolved','closed'],default:'open'},customer:String,lead:{type:mongoose.Schema.Types.ObjectId,ref:'Lead'}} ,{timestamps:true});
schema.index({status:1,createdAt:-1}); schema.index({lead:1});
export default mongoose.model('Ticket',schema);
