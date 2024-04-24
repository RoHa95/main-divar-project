import React from "react";
import { sp } from "src/utils/numbers";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function Main({ posts }) {
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
