import api from "src/configs/api";
import { getCookie } from "src/utils/ckookie";

const token = getCookie("accessToken");

const getProfile = () => api.get("user/whoami").then((res) => res || false);

const getPosts = () => api.get("post/my");

const getAllPosts = () => api.get("");

const deletePost = (id) => api.delete("delete/:id");

export { getProfile, getPosts, getAllPosts, deletePost };
