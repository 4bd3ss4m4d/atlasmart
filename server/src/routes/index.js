import { Router } from "express";
import v1Routes from "#routes/v1/index.js";
import docsRoutes from "#routes/docs/swagger.route.js";

const initializeRoutes = (app) => {
  const router = Router();

  // Health check endpoint
  router.get("/health", (req, res) => {
    res.status(200).json({
      status: "success",
      message: "Server is healthy",
      timestamp: new Date().toISOString(),
    });
  });

  // API Documentation
  router.use("/docs", docsRoutes);

  // API versions
  router.use("/api/v1", v1Routes);

  // Handle undefined routes
  router.use("*", (req, res) => {
    res.status(404).json({
      status: "error",
      message: `Cannot ${req.method} ${req.originalUrl}`,
    });
  });

  // Register routes
  app.use(router);

  return app;
};

export default initializeRoutes;
