import React from 'react'
import AddPost from 'src/components/tamplates/AddPost'
import PostList from 'src/components/tamplates/PostList'

function DashboardPage() {
  return (
    <div>
    <AddPost/>
    <PostList/>
    </div>
  )
}

export default DashboardPage