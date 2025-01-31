import { SYSTEM_ERROR_CODES } from "#core/errors/constants/errorCodes/index.js";

export const SYSTEM_ERROR_MESSAGES = {
  [SYSTEM_ERROR_CODES.SYS_1001]: {
    default: "A system error has occurred.",
    template: "System error: {{reason}}",
  },
  [SYSTEM_ERROR_CODES.SYS_1002]: {
    default: "System resources exhausted.",
    template: "Resource exhaustion: {{resource}} is critically low.",
  },
  [SYSTEM_ERROR_CODES.SYS_1003]: {
    default: "A process has crashed unexpectedly.",
    template: "Process '{{process}}' has crashed due to {{reason}}.",
  },
  [SYSTEM_ERROR_CODES.SYS_1004]: {
    default: "Memory limit exceeded.",
    template: "Memory limit exceeded: {{usage}}MB used, limit is {{limit}}MB.",
  },
  [SYSTEM_ERROR_CODES.SYS_1005]: {
    default: "Unhandled promise rejection detected.",
    template: "Unhandled rejection in {{module}}: {{errorMessage}}",
  },
  [SYSTEM_ERROR_CODES.SYS_1006]: {
    default: "Uncaught exception detected.",
    template: "Uncaught exception: {{errorMessage}} in {{module}}",
  },
};
