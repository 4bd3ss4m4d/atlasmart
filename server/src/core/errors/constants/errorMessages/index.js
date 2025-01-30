// Import all message modules
import { SYSTEM_ERROR_MESSAGES } from "./system.messages.js";
import { CONFIGURATION_ERROR_MESSAGES } from "./configuration.messages.js";

// Export them individually
export { SYSTEM_ERROR_MESSAGES, CONFIGURATION_ERROR_MESSAGES };

// Export them combined
export const ERROR_MESSAGES = {
  SYSTEM: SYSTEM_ERROR_MESSAGES,
  CONFIGURATION: CONFIGURATION_ERROR_MESSAGES,
};
