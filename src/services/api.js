/* eslint-disable */
import axios from "axios";

const api = axios.create({
  //baseURL: "http://0.0.0.0:5000/api",
  //baseURL: "https://api-toyo.loca.lt/api"
  //baseURL: "https://dev-end-marco.toyoverse.com/api"
  //baseURL: "https://game-api.toyoverse.com/api"
  //baseURL: "https://3.19.75.152/api"
  baseURL: process.env.REACT_APP_API_BASE_URL,
});

export default api;
