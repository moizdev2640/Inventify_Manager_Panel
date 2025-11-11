const DEFAULT_API_BASE_URL = "https://inventify-manager-panel.vercel.app/api";

const API_BASE_URL = (
  process.env.REACT_APP_API_BASE_URL || DEFAULT_API_BASE_URL
).replace(/\/+$/, "");

export { API_BASE_URL };

