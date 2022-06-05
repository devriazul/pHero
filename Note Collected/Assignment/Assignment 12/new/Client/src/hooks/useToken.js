import axios from "axios";
// For JWT jwt token
const { useState, useEffect } = require("react")

const useToken = user =>{
    const [token, setToken] = useState('');
    useEffect(()=>{
        const email='';
        const getToken = async () =>{
            const {data} = await axios.post('',{email})
            setToken(data.accessToken);
            localStorage.setItem('accessToken',data.accessToken);
        }
        getToken();
    },[user]);
    return [token, setToken];
}
export default useToken;