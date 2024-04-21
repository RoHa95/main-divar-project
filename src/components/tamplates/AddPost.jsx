import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getCategory } from "src/services/admin";

import styles from "./AddPost.module.css";

function AddPost() {
  const { data } = useQuery(["get-categories"], getCategory);
  const [form, setForm] = useState({
    title: "",
    content: "",
    category: "",
    city: "",
    amount: null,
    image: null,
  });
  const changeHandler = (e) => {
    const name = e.target.name;
    if (name !== "image") {
      setForm({ ...form, [name]: e.target.value });
    } else {
      setForm({ ...form, [name]: e.target.files[0] });
      console.log(e.target.files[0]);
    }
  };
  console.log(data);
  const addHandler = (e) => {
    e.preventDefault();
    console.log(form);
  };
  return (
    <form onChange={changeHandler} className={styles.form}>
      <h3>افزودن آگهی</h3>
      <label htmlFor="title">عنوان آگهی</label>
      <input type="text" name="title" id="title" />
      <label htmlFor="content">توضیحات</label>
      <textarea name="content" id="content" />
      <label htmlFor="amount"> قیمت</label>
      <input type="text" name="amount" id="amount" />
      <label htmlFor="city">شهر </label>
      <input type="text" name="city" id="city" />
      <label htmlFor="category">دسته بندی </label>
      <select name="category" id="category">
        {data?.data.map((i) => (
          <option key={i._id} value={i._id}>
            {i.name}
          </option>
        ))}
      </select>
      <label htmlFor="image">عکس </label>
      <input type="file" name="image" id="image" />
      <button onClick={addHandler}>افزودن</button>
    </form>
  );
}

export default AddPost;
