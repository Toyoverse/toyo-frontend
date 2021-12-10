import axios from "axios";

const api = axios.create({
  baseURL: "https://x078ytklzx-game-api.toyoverse.com/api",
});

export default api;