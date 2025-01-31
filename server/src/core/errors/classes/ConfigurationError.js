import { BaseError } from "./BaseError.js";
import { CONFIGURATION_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";
import { CONFIGURATION_ERROR_MESSAGES } from "#core/errors/constants/errorMessages/index.js";
import { HTTP_STATUS_CODES } from "#core/constants/httpStatusCodes.js";

/**
 * Handles all configuration-related errors.
 */
export class ConfigurationError extends BaseError {
  constructor(errorCode, messageParams = {}, details = null, cause = null) {
    if (!CONFIGURATION_ERROR_MESSAGES[errorCode]) {
      throw new Error(`❌ Invalid ConfigurationError code: ${errorCode}`);
    }

    const messageConfig = CONFIGURATION_ERROR_MESSAGES[errorCode];

    super(
      messageConfig,
      messageParams,
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      errorCode,
      details,
      false, // Configuration errors are not operational
      cause
    );
  }

  /**
   * ✅ Factory method to create predefined configuration errors.
   */
  static create(type, messageParams = {}, details = null, cause = null) {
    const errorMapping = {
      // General Configuration Errors
      missing: CONFIGURATION_ERROR_CODES.CFG_1001,
      syntax: CONFIGURATION_ERROR_CODES.CFG_1002,
      env: CONFIGURATION_ERROR_CODES.CFG_1003,
      validation: CONFIGURATION_ERROR_CODES.CFG_1004,
      settings: CONFIGURATION_ERROR_CODES.CFG_1005,
      // Mongoose Schema Builder Errors
      modelName: CONFIGURATION_ERROR_CODES.CFG_2001,
      schemaConfig: CONFIGURATION_ERROR_CODES.CFG_2002,
      missingFields: CONFIGURATION_ERROR_CODES.CFG_2003,
      invalidFields: CONFIGURATION_ERROR_CODES.CFG_2004,
    };

    // Check if the type exists, otherwise throw an error
    if (!errorMapping[type]) {
      throw new Error(
        `❌ Invalid ConfigurationError type: "${type}". Available types: ${Object.keys(
          errorMapping
        ).join(", ")}`
      );
    }

    const errorCode = errorMapping[type];

    return new ConfigurationError(errorCode, messageParams, details, cause);
  }
}
