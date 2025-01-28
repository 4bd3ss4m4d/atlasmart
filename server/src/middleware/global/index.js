import parserMiddleware from "./parser.middleware.js";
import loggerMiddleware from "./logger.middleware.js";

export default function initializeGlobalMiddleware(app) {
  app.use(parserMiddleware());
  app.use(loggerMiddleware());
}
