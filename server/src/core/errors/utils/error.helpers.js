// import { config } from "#config/env/env.config.js";

/**
 * Generates a unique error ID for tracking across logs & monitoring tools.
 * Format: ERR-<timestamp>-<random_number>
 * Example: ERR-1700000000000-5678
 * @returns {string} Unique error ID
 */
export function generateErrorId() {
  return `ERR-${Date.now()}-${Math.floor(Math.random() * 10000)}`;
}

/**
 * Recursively formats the cause chain for detailed error reporting.
 * Prevents infinite recursion by limiting depth.
 */
export function formatCause(cause, depth = 0, maxDepth = 3) {
  if (!cause || depth >= maxDepth) return null;

  const causeInfo = {
    name: cause.name,
    message: cause.message,
    ...(cause.code ? { code: cause.code } : {}), // Avoids undefined values
    ...(cause.errorCode ? { errorCode: cause.errorCode } : {}),
    // ...(config.server.isDev ? { stack: cause.stack } : {}),
    ...(true ? { stack: cause.stack } : {}),
  };

  if (cause.cause) {
    causeInfo.cause = formatCause(cause.cause, depth + 1, maxDepth);
  }

  return causeInfo;
}
