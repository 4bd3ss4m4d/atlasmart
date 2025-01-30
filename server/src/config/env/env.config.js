import dotenv from "dotenv";
import { cleanEnv } from "envalid";
import { envValidationSchema } from "#config/env/env.validate.js";

// Load environment variables from .env file
dotenv.config();

// Validate and clean environment variables
const env = cleanEnv(process.env, envValidationSchema, {
  strict: true,
});

// Export configuration object
export const config = {
  server: {
    port: env.PORT,
    nodeEnv: env.NODE_ENV,
    isDev: env.NODE_ENV === "development",
    isProd: env.NODE_ENV === "production",
    isTest: env.NODE_ENV === "test",
  },
  database: {
    mode: env.DB_MODE,
    uri:
      env.DB_MODE === "atlas" ? env.ATLAS_MONGODB_URI : env.LOCAL_MONGODB_URI,
  },
};

// Debug logging only in development
if (config.server.isDev) {
  console.log("Environment Configuration:", {
    nodeEnv: config.server.nodeEnv,
    port: config.server.port,
    dbMode: config.database.mode,
  });
}
