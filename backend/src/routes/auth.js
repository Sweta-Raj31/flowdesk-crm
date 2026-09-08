import express from 'express'; import bcrypt from 'bcryptjs'; import User from '../models/User.js'; import {signToken,auth} from '../middleware/auth.js'; import {loginSchema,validate} from '../validators.js';
const r=express.Router();
r.post('/login',validate(loginSchema),async(req,res)=>{const u=await User.findOne({email:req.body.email}).lean();if(!u||!(await bcrypt.compare(req.body.password,u.password)))return res.status(401).json({message:'Invalid credentials'});res.json({token:signToken(u),user:{id:u._id,name:u.name,email:u.email,role:u.role}})});
r.get('/me',auth,async(req,res)=>{const u=await User.findById(req.user.sub).select('-password').lean();res.json({user:u})}); export default r;
