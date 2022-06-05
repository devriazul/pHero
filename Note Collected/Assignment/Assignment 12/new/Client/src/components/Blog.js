import React from 'react';

const Blog = (props) => {
    const {blogTitle, blog, image} = props.blog;
    return (
        <div className=' bg-base-100 mt-10 p-5  min-h-[250px] rounded-2xl'>
            <h1 className='text-2xl'>{blogTitle}</h1>
            <div className="mt-5 relative">
                <img src={image} className=' w-40 h-40 float-left mr-5' alt="" />
                <p>{blog}</p>
            </div>
        </div>
    );
};

export default Blog;