import { useState } from "react";
import axios from "axios";
const useBlogs = () => {
    const [blogs, setBlogs] = useState([]);
    const req = async () => {
        const response = await axios.get('https://etools-server.herokuapp.com/blogs')
        setBlogs(response.data)
      }
      req() 
    return [blogs, setBlogs];
};

export default useBlogs;