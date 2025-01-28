import mongoose from "mongoose";
import { config } from "../config/env/env.config.js";

const connectMongoDB = async () => {
  try {
    const conn = await mongoose.connect(config.database.uri);
    console.log(`MongoDB connected successfully: ${conn.connection.host}`);
    console.log(`Database Mode: ${config.database.mode}`);
  } catch (error) {
    console.error(`MongoDB connection error: ${error.message}`);
    process.exit(1);
  }
};

export default connectMongoDB;
