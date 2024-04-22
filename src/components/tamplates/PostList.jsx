import { useQuery } from '@tanstack/react-query'
import React from 'react'
import { getPosts } from 'src/services/user'
import Loader from '../modules/Loader';
import { sp } from 'src/utils/numbers';

function PostList() {
    const {data, isLoading} = useQuery(["my-post-list"],getPosts)

    console.log(data);

  return (
    <div>
        {isLoading ? <Loader/> :(
            <>
                <h3>آگهی های شما</h3>
                {
                    data.data.posts.map((post)=>(
                        <div key={post._id}>
                            <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt="" />
                                <div>
                                    <p>{post.options.title}</p>
                                    <span>{post.options.content}</span>
                                </div>
                                <div>
                                    <p>{new Date(post.createdAt).toLocaleDateString("fa-IR")}</p>
                                    <span>{sp(post.amount)} تومان </span>
                                </div>
                        </div>
                    ))
                }
            </>
        )}
    </div>
  )
}

export default PostList