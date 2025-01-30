import { CONFIGURATION_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";

export const CONFIGURATION_ERROR_MESSAGES = {
  // Configuration Error Messages
  [CONFIGURATION_ERROR_CODES.CFG_1001]: "Configuration file not found.",
  [CONFIGURATION_ERROR_CODES.CFG_1002]: "Invalid configuration syntax.",
  [CONFIGURATION_ERROR_CODES.CFG_1003]:
    "Invalid environment variable detected.",
  [CONFIGURATION_ERROR_CODES.CFG_1004]: "Configuration validation failed.",
  [CONFIGURATION_ERROR_CODES.CFG_1005]:
    "Invalid application settings detected.",
};
