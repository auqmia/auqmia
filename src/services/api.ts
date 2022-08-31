import axios from "axios";

const api = axios.create({
    baseURL: "https://auqmia.herokuapp.com",
    timeout: 5000,
  });
  
  export default api;