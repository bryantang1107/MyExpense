import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://localhost:7159/",
});

export default axiosInstance;
