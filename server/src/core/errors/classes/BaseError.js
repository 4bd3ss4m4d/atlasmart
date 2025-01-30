import {
  generateErrorId,
  formatCause,
} from "#core/errors/utils/error.helpers.js";
import { config } from "#config/env/env.config.js";

export class BaseError extends Error {
  constructor(
    message,
    statusCode,
    errorCode,
    details = [], // Stores sub-errors (e.g., multiple validation errors)
    isOperational = true, // Distinguishes expected errors from system crashes
    cause = null // Stores the original error, if any
  ) {
    super(message, { cause });

    // Basic error properties
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.errorCode = errorCode || this.name; // Default errorCode to class name
    this.details =
      Array.isArray(details) && details.length > 0 ? details : null;

    // Additional metadata
    this.timestamp = new Date().toISOString();
    this.isOperational = isOperational;
    this.cause = cause;
    this.errorId = generateErrorId();

    // Capture stack trace, excluding constructor call from it
    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, this.constructor);
    }
  }

  /**
   * Standardized error response format.
   */
  toJSON() {
    const errorResponse = {
      success: false,
      error: {
        id: this.errorId,
        name: this.name,
        code: this.errorCode,
        status: this.statusCode,
        message: this.message,
        timestamp: this.timestamp,
      },
    };

    // Add optional fields only if they exist
    if (this.details) {
      errorResponse.error.details = this.details;
    }

    // In development, include stack trace and cause chain
    if (config.server.isDev) {
      errorResponse.error.stack = this.stack;

      if (this.cause) {
        errorResponse.error.cause = formatCause(this.cause);
      }
    }

    return errorResponse;
  }
}
