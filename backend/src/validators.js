import { z } from 'zod';
export const validate=(schema)=>(req,res,next)=>{const r=schema.safeParse(req.body);if(!r.success)return res.status(400).json({message:'Validation failed',errors:r.error.flatten()});req.body=r.data;next()};
export const loginSchema=z.object({email:z.string().email(),password:z.string().min(6)});
export const leadSchema=z.object({name:z.string().min(2),email:z.string().email(),company:z.string().min(2),phone:z.string().optional(),status:z.enum(['new','contacted','qualified','won','lost']).optional(),source:z.string().optional()});
export const ticketSchema=z.object({subject:z.string().min(3),description:z.string().optional(),priority:z.enum(['low','medium','high']).optional(),status:z.enum(['open','in_progress','resolved','closed']).optional(),customer:z.string().optional(),lead:z.string().optional()});
export const shipmentSchema=z.object({trackingNumber:z.string().min(3),carrier:z.string().optional(),origin:z.string().optional(),destination:z.string().optional(),status:z.enum(['pending','picked_up','in_transit','delivered','delayed']).optional(),customer:z.string().optional(),lead:z.string().optional(),eta:z.coerce.date().optional()});
