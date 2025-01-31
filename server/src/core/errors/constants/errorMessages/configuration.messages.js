import { CONFIGURATION_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";

export const CONFIGURATION_ERROR_MESSAGES = {
  // General Configuration Errors
  [CONFIGURATION_ERROR_CODES.CFG_1001]: {
    default: "A required configuration file is missing.",
    template: "Configuration file '{{fileName}}' not found in path '{{path}}'.",
  },

  [CONFIGURATION_ERROR_CODES.CFG_1002]: {
    default: "Configuration file contains syntax errors.",
    template: "Syntax error in configuration file '{{fileName}}': {{reason}}",
  },

  [CONFIGURATION_ERROR_CODES.CFG_1003]: {
    default: "One or more environment variables are invalid.",
    template: "Invalid environment variable '{{varName}}': '{{value}}'.",
  },

  [CONFIGURATION_ERROR_CODES.CFG_1004]: {
    default: "Configuration validation has failed.",
    template: "Configuration validation failed: {{reason}}",
  },

  [CONFIGURATION_ERROR_CODES.CFG_1005]: {
    default: "Application settings contain invalid values.",
    template: "Invalid application setting '{{setting}}': {{value}}",
  },

  // Mongoose Schema Builder Errors
  [CONFIGURATION_ERROR_CODES.CFG_2001]: {
    default: "Invalid model name. A valid model name must be provided.",
    template: "Invalid model name '{{modelName}}'. {{reason}}",
  },

  [CONFIGURATION_ERROR_CODES.CFG_2002]: {
    default: "Invalid schema configuration.",
    template: "Schema configuration error in model '{{modelName}}': {{reason}}",
  },

  [CONFIGURATION_ERROR_CODES.CFG_2003]: {
    default: "Schema definition is missing required fields.",
    template: "Missing required fields in schema for model '{{modelName}}'.",
  },

  [CONFIGURATION_ERROR_CODES.CFG_2004]: {
    default: "Invalid schema options provided.",
    template: "Invalid schema options for model '{{modelName}}': {{details}}",
  },
};
