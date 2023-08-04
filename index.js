import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors'
import registrationRoute from './routes/reg.js';
let app = express();
app.use(express.json())
app.use(cors());
app.use(registrationRoute);
mongoose.connect('mongodb://localhost:27017/miniProject').then(()=>{
    console.log('DB connected Successfully');
}).catch((err)=>{
    console.log(err);
})
app.listen(8080);