import React, { useEffect, useState } from "react";
import useTopics from "../../hooks/useTopics";
import Topic from "../Topic/Topic";
import "./Services.css";
const Services = () => {
const [topics, setTopics] = useTopics();
  return (
    <div className="services row container m-auto p-3">
        {topics.map(item=><Topic key={item.id} item={item}></Topic>)}
    </div>
  );
};

export default Services;
