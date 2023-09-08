import express from "express";

import { config } from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import logger from "morgan";

import logBookDB from "./configs/mongoDB_connection";

config();

// MongoDB connection validation
logBookDB.on('error', (err)=> console.log(`ERRO to try connect MongoDB -> ${err}`))
logBookDB.once('open', ()=> console.log('Database connected'))

export const app = express();

app.use(
  cors({
    credentials: true,
  })
);

app.use(bodyParser.json())
app.use(cookieParser())
app.use(compression())
app.use(logger('dev'))

app.get('/', (req, res)=>{
    res.send('HELLO')
})
