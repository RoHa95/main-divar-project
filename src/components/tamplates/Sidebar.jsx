import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";

import styles from "./Sidebar.module.css";

function Sidebar({ categories, cateData, setCatData, setShow }) {
  console.log(categories);
  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul>
        {categories?.data.map((category) => (
          <li
            key={category._id}
            onClick={() => {
              setCatData(category._id), setShow(true);
            }}
          >
            <img src={`${category.icon}.svg`} alt="" />
            <p>{category.name}</p>
          </li>
        ))}
        <li onClick={()=>{setShow(false),setCatData(null)}}>همه</li>
      </ul>
    </div>
  );
}

export default Sidebar;
