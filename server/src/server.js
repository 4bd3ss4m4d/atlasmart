import "#config/env/env.config.js";
import app from "#root/app.js";
import { config } from "#config/env/env.config.js";

const server = app.listen(config.server.port, () => {
  console.log(
    `🚀 Server is running in ${config.server.nodeEnv} mode on http://localhost:${config.server.port}`
  );
  console.log(`📍 API Base URL: http://localhost:${config.server.port}/api/v1`);
  console.log(`📄 Swagger Docs: http://localhost:${config.server.port}/docs`);
});

// Handle unhandled promise rejections
process.on("unhandledRejection", (err) => {
  console.error("Unhandled Promise Rejection:", err);
  server.close(() => process.exit(1));
});
