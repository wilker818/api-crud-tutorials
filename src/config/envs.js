import * as dotenv from "dotenv";
dotenv.config();

export default {
  port: process.env.PORT || 3000,
  db_url: process.env.CONNECT_MONGO_URL || "",
};
