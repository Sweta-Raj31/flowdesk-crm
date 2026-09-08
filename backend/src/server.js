import 'dotenv/config';import app from './app.js';import {connectDB} from './config/db.js';import {seed} from './seed.js';
const start=async()=>{await connectDB();if(process.env.SEED_DB==='true')await seed();app.listen(process.env.PORT||5000,()=>console.log(`API running on ${process.env.PORT||5000}`));};start().catch(e=>{console.error(e);process.exit(1)});
