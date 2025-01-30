import { SYSTEM_ERROR_CODES } from "./system.codes.js";
import { CONFIGURATION_ERROR_CODES } from "./configuration.codes.js";

// Export them individually
export { SYSTEM_ERROR_CODES, CONFIGURATION_ERROR_CODES };

// Export them combined
export const ERROR_CODES = {
  SYSTEM: SYSTEM_ERROR_CODES,
  CONFIGURATION: CONFIGURATION_ERROR_CODES,
};
