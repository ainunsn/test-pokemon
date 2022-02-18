import { apiUrl } from "constants";

const { default: axios } = require("axios");

const api = axios.create({
  baseURL: apiUrl,
});

export default api;
