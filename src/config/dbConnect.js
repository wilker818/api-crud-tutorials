import envs from "./envs.js"
import mongoose from "mongoose";

mongoose.connect(envs.db_url);

let db = mongoose.connection;

export default db;
