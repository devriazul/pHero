import React from 'react';
import notFoundImg from './../img/404.jpg'
const NotFound = () => {
    return (
        <div className=''>
            <img src={notFoundImg} className=" w-full mx-auto" alt="" />
        </div>
    );
};

export default NotFound;