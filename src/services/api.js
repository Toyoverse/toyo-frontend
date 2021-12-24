/* eslint-disable */
import axios from "axios";

const api = axios.create({
  //baseURL: "https://0.0.0.0:5001/api",
  //baseURL: "https://x078ytklzx-game-api.toyoverse.com/api"
  baseURL: "https://game-api.toyoverse.com/api"
});

export default api;