import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import React from "react";
import { deletePost, getPosts } from "src/services/user";
import Loader from "../modules/Loader";
import { sp } from "src/utils/numbers";

import styles from "./PostList.module.css";
import { getCookie } from "src/utils/ckookie";
import axios from "axios";
import toast from "react-hot-toast";

function PostList() {
  const { data, isLoading } = useQuery(["my-post-list"], getPosts);
  const queryClient = useQueryClient();

  console.log(data);

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
        queryClient.invalidateQueries("my-post-list");
      })
      .catch((error) => toast.error("مشکلی پیش امده است."));
  };
  return (
    <div className={styles.list}>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <h3>آگهی های شما</h3>
          {data.data.posts.map((post) => (
            <div key={post._id} className={styles.post}>
              <img
                src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`}
                alt=""
              />
              <div>
                <p>{post.options.title}</p>
                <span>{post.options.content}</span>
              </div>
              <div className={styles.price}>
                <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                <span>{sp(post.amount)} تومان </span>
              </div>
              <button onClick={deleteHandler} data-id={post._id}>
                delete
              </button>
            </div>
          ))}
        </>
      )}
    </div>
  );
}

export default PostList;
