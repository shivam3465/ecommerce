import cookieParser from 'cookie-parser';
import express, { urlencoded } from 'express'
import cors from 'cors'
import productRouter from './routers/product.js';

const app = express();
app.use(cors({
    origin: "http://127.0.0.1:3000",
    methods: ['GET','POST','PUT','DELETE'],
    credentials:true,
}))


// middlewares 
app.use(express.json({limit: "50mb"}));
app.use(urlencoded({extended: true,limit:"50mb"}));
app.use(cookieParser());

// routes
app.use('/api/v1',productRouter);

export {app}