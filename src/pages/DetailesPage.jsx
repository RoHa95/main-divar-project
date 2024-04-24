import { useQuery } from '@tanstack/react-query';
import React from 'react'
import { useParams } from 'react-router-dom'
import { getAllPosts } from 'src/services/user';

import styles from "./DetailesPage.module.css";

function DetailesPage() {
    const { data, isLoading } = useQuery(["all-post-list"], getAllPosts);
    const {id} = useParams();
    const result = data.data.posts.find(i => i._id === id);
    console.log(result);
  return (
    <div className={styles.container}>
        <img className={styles.photo} src={`${import.meta.env.VITE_BASE_URL}${result.images}`} />
        <div className={styles.info}>
        <h3>{result.options.title}</h3>
        <p>{result.options.city}</p>
        <p>{result.options.content}</p>
        <p>{result.amount}</p>
        <p>{new Date(result.createdAt).toLocaleDateString("fa-IR")}</p>
        </div>
       
        {/* <span>{new Date(result.createdAt).toLocaleDateString("fa/IR")}</span> */}
    </div>
  )
}

export default DetailesPage