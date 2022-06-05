import React from "react";
import Blog from "../components/Blog";
import useBlogs from "../hooks/useBlogs";
import Loading from '../components/Loading'
const Blogs = () => {
  const [blogs] = useBlogs();
  if(!blogs.length){
    return <Loading/>
  }
  return (
    <div className=" p-5 lg:p-10 bg-base-300">
      {blogs.map((blog) => {
        return <Blog key={blog._id} blog={blog}/>
      })}
    </div>
  );
};

export default Blogs;
