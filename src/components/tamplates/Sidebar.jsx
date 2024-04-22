import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getCategory } from "src/services/admin";

import styles from "./Sidebar.module.css";

function Sidebar() {
  const { data } = useQuery(["get-categoties"], getCategory);
  console.log(data);
  return (
    <div className={styles.sidebar}>
      <h4>دسته بندی ها</h4>
      <ul>
        {data?.data.map((category) => (
          <li key={category._id}>
            <img src={`${category.icon}.svg`} alt="" />
            <p>{category.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Sidebar;
