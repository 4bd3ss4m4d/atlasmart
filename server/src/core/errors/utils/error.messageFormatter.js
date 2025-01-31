export const formatErrorMessage = (messageConfig, params = {}) => {
  if (!messageConfig || typeof messageConfig !== "object") {
    console.error(
      "❌ formatErrorMessage: Invalid message configuration provided",
      messageConfig
    );
    throw new Error("❌ Invalid message configuration provided");
  }

  const defaultMessage = messageConfig.default || "An unknown error occurred.";
  const { template } = messageConfig;

  if (!template || Object.keys(params).length === 0) {
    return defaultMessage;
  }

  let formattedMessage = template.replace(/\{\{(\w+)\}\}/g, (match, key) => {
    if (params[key] === undefined) {
      console.warn(
        `⚠️ formatErrorMessage: Missing replacement for "${key}" in template.`
      );
      return match; // Keep the placeholder if the value is missing
    }
    return params[key];
  });

  return formattedMessage.includes("{{") ? defaultMessage : formattedMessage;
};
