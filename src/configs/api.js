import axios from "axios";
import { getCookie } from "src/utils/ckookie";

const api = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use((req)=>{
  const accessToken = getCookie("accessToken");
  if(accessToken){
    req.headers["Authorization"] = `bearer ${accessToken}`;
  }
  return req;
},
error =>{
  return Promise.reject(error);
})
export default api;