import { useEffect, useState } from "react";

const useTopics = ()=>{
    const [topics, setTopics] = useState([]);
    useEffect(()=>{ 
        fetch('services.json')
        .then(  res=>{ return res.json()})
        .then(data=>setTopics(data));
    },[]);
    return [topics, setTopics];
}
export default useTopics;