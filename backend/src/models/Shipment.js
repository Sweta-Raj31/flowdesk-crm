import mongoose from 'mongoose';
const schema=new mongoose.Schema({trackingNumber:{type:String,required:true,unique:true},carrier:String,origin:String,destination:String,status:{type:String,enum:['pending','picked_up','in_transit','delivered','delayed'],default:'pending'},customer:String,lead:{type:mongoose.Schema.Types.ObjectId,ref:'Lead'},eta:Date},{timestamps:true});
schema.index({status:1,createdAt:-1}); schema.index({lead:1});
export default mongoose.model('Shipment',schema);
