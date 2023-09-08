import mongoose from "mongoose";

const mongoDB_connection = process.env.MONGODB_ATLAS || ""

mongoose.connect(mongoDB_connection)

const logBookDB = mongoose.connection

export default logBookDB
