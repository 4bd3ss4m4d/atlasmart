import morgan from "morgan";
import { config } from "../../config/env/env.config.js";

export default function loggerMiddleware() {
  return morgan(config.server.isDev ? "dev" : "combined");
}
