import React from "react";
import { sp } from "src/utils/numbers";
import { Link } from "react-router-dom";
import styles from "./Main.module.css";

function CategoryPosts({ result }) {
  console.log(result);
  return (
    <div className={styles.container}>
      {result.map((result) => (
        <div key={result._id} className={styles.card}>
         <Link to={`/dashboard/${result._id}`}>
         <div className={styles.info}>
            <p>{result.options.title}</p>
            <div>
              <p>{sp(result.amount)} تومان</p>
              <span>{result.options.city}</span>
            </div>
          </div>
          <img
            src={`${import.meta.env.VITE_BASE_URL}${result.images[0]}`}
            alt=""
          />
         </Link>
        </div>
      ))}
    </div>
  );
}

export default CategoryPosts;
