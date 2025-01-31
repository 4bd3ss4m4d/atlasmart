import { BaseError } from "./BaseError.js";
import { SYSTEM_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";
import { SYSTEM_ERROR_MESSAGES } from "#core/errors/constants/errorMessages/index.js";
import { HTTP_STATUS_CODES } from "#core/constants/httpStatusCodes.js";

/**
 * 🔥 Handles system-related errors (e.g., crashes, memory issues).
 */
export class SystemError extends BaseError {
  constructor(errorCode, messageParams = {}, details = null, cause = null) {
    if (!SYSTEM_ERROR_MESSAGES[errorCode]) {
      throw new Error(`❌ Invalid SystemError code: ${errorCode}`);
    }

    const messageConfig = SYSTEM_ERROR_MESSAGES[errorCode];

    super(
      messageConfig,
      messageParams,
      HTTP_STATUS_CODES.INTERNAL_SERVER_ERROR,
      errorCode,
      details,
      false, // System errors are typically non-operational
      cause
    );
  }

  /**
   * Factory method to create predefined system errors.
   */
  static create(type, messageParams = {}, details = null, cause = null) {
    const errorMapping = {
      system: SYSTEM_ERROR_CODES.SYS_1001,
      resource: SYSTEM_ERROR_CODES.SYS_1002,
      crash: SYSTEM_ERROR_CODES.SYS_1003,
      memory: SYSTEM_ERROR_CODES.SYS_1004,
      unhandledRejection: SYSTEM_ERROR_CODES.SYS_1005,
      uncaughtException: SYSTEM_ERROR_CODES.SYS_1006,
    };

    // 🔴 Check if the type exists, otherwise throw an error
    if (!errorMapping[type]) {
      throw new Error(
        `❌ Invalid SystemError type: "${type}". Available types: ${Object.keys(
          errorMapping
        ).join(", ")}`
      );
    }

    const errorCode = errorMapping[type];

    // 🔴 Validate if the error message is correctly defined
    if (!SYSTEM_ERROR_MESSAGES[errorCode]) {
      throw new Error(
        `❌ SystemError message not found for code: ${errorCode}`
      );
    }

    return new SystemError(errorCode, messageParams, details, cause);
  }
}
