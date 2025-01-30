import parserMiddleware from "#middleware/global/parser.middleware.js";
import loggerMiddleware from "#middleware/global/logger.middleware.js";

export default function initializeGlobalMiddleware(app) {
  app.use(parserMiddleware());
  app.use(loggerMiddleware());
}
