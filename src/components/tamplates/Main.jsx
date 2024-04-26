import React from "react";
import { sp } from "src/utils/numbers";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";
import { useQuery } from "@tanstack/react-query";
import { getProfile } from "src/services/user";
import { getCookie } from "src/utils/ckookie";
import axios from "axios";
import toast from "react-hot-toast";

function Main({ posts }) {
  const { data } = useQuery(["profile"], getProfile);
  const role = data?.data.role;

  const deleteHandler = async (e) => {
    e.preventDefault();
    const token = getCookie("accessToken");
    const id = e.target.dataset.id;
    axios
      .delete(`${import.meta.env.VITE_BASE_URL}post/delete/${id}`, {
        headers: {
          Authorization: `bearer ${token}`,
        },
      })
      .then((res) => {
        toast.success(res.data.message);
        console.log("hi");
        // queryClient.invalidateQueries("my-post-list");
      })
      .catch((error) => toast.error("مشکلی پیش امده است."));
  };
  console.log(posts);
  return (
    <div className={styles.container}>
      {posts.data.posts.map((post) => (
        <div key={post._id} className={styles.card}>
         <Link to={`/dashboard/${post._id}`}>
         <div className={styles.info}>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
      {
        role=== "ADMIN" && <button onClick={deleteHandler} data-id={post._id}>حذف آگهی</button>
      }
            
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
            alt=""
          />
         </Link>
        </div>
      ))}
    </div>
  );
}

export default Main;
