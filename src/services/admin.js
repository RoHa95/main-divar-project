import api from "src/configs/api";

const addCategory = data => api.post("category", data);
const getCategory = data => api.get("category");
export {addCategory, getCategory}