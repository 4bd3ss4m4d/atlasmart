import { str, port } from "envalid";

export const envValidationSchema = {
  NODE_ENV: str({
    choices: ["development", "test", "production"],
    default: "development",
  }),
  PORT: port({ default: 5000 }),

  DB_MODE: str({
    choices: ["local", "atlas"],
    default: "local",
    desc: "Database connection mode - either local MongoDB or Atlas",
  }),
  ATLAS_MONGODB_URI: str({
    desc: "MongoDB Atlas connection string",
    example: "mongodb+srv://<username>:<password>@cluster0.mongodb.net/dbname",
  }),
  LOCAL_MONGODB_URI: str({
    desc: "Local MongoDB connection string",
    default: "mongodb://127.0.0.1:27017/atlasmart",
  }),
};
