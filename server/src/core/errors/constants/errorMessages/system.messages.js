import { SYSTEM_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";

export const SYSTEM_ERROR_MESSAGES = {
  [SYSTEM_ERROR_CODES.SYS_1001]: "A system error has occurred.",
  [SYSTEM_ERROR_CODES.SYS_1002]: "System resources exhausted.",
  [SYSTEM_ERROR_CODES.SYS_1003]: "A process has crashed unexpectedly.",
  [SYSTEM_ERROR_CODES.SYS_1004]: "Memory limit exceeded.",
  [SYSTEM_ERROR_CODES.SYS_1005]: "Unhandled promise rejection detected.",
  [SYSTEM_ERROR_CODES.SYS_1006]: "Uncaught exception detected.",
};
