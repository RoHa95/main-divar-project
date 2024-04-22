import React from 'react'
import { sp } from 'src/utils/numbers';

function Main({posts}) {
  console.log(posts);
  return (
    <div>
      {posts.data.posts.map(post=>(
        <div key={post._id}>
          <div>
            <p>{post.options.title}</p>
            <div>
              <p>{sp(post.amount)} تومان</p>
              <span>{post.options.city}</span>
            </div>
          </div>
          <img src={`${import.meta.env.VITE_BASE_URL}${post.images[0]}`} alt="" />
        </div>
      ))}
    </div>
  )
}

export default Main