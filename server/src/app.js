import express from "express";
import { connectMongoDB } from "#database/core/connectors/index.js";
import initializeRoutes from "#routes/index.js";
import initializeGlobalMiddleware from "#middleware/global/index.js";

const app = express();

connectMongoDB();

initializeGlobalMiddleware(app);

initializeRoutes(app);

export default app;
