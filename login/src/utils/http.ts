import axios from "axios";
// import { getCookie } from "./cookies";

export const http = axios.create({
  baseURL: "http://host.docker.internal:3000",
  // baseURL: "http://localhost:3000",
});
