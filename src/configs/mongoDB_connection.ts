import mongoose from "mongoose";
import { config } from "dotenv";
config();

const mongoDB_connection = process.env.MONGODB_ATLAS || "";

mongoose.connect(mongoDB_connection);

const logBookDB = mongoose.connection;

export default logBookDB;
