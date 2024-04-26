import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import Loader from "src/components/modules/Loader";
import Main from "src/components/tamplates/Main";
import Sidebar from "src/components/tamplates/Sidebar";
import CategoryPosts from "src/components/tamplates/CategoryPosts";
import { getCategory } from "src/services/admin";
import { getAllPosts } from "src/services/user";

const style = {
  display: "flex",
};
function HomePage() {
  const { data: posts, isLoading: postLoading } = useQuery(
    ["all-post-list"],
    getAllPosts
  );
  const { data: categories, isLoading: categoryLoading } = useQuery(
    ["get-categoties"],
    getCategory
  );
  const [cateData, setCatData] = useState([]);
  console.log(cateData);
  const result = posts?.data.posts.filter((p) => p.category === cateData);
  console.log(result);

  return (
    <>
      {postLoading || categoryLoading ? (
        <Loader />
      ) : (
        <div style={style}>
          <Sidebar
            cateData={cateData}
            setCatData={setCatData}
            categories={categories}
          />
          {cateData ? (
            <CategoryPosts result={result} />
          ) : (
            <Main posts={posts} />
          )}
        </div>
      )}
    </>
  );
}

export default HomePage;
