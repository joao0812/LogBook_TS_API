import express from "express";

import { config } from "dotenv";

import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import compression from "compression";
import cors from "cors";
import logger from "morgan";

config();

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
