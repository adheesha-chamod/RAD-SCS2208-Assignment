import React, {useEffect, useState} from 'react';
import "./Chatogary.css";
import axios from 'axios';
import Chatogary from "./Chatogary";

const URL="http://localhost:8080/chatogary";

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data);
};


const Chatogaries = () => {
    const [chatogaries,setChatogaries]=useState();
    useEffect(()=>{
        fetchHandler().then((data)=>setChatogaries(data.chatogaries));
    }, []);
    console.log(chatogaries);
    return (
    <div>
        <ul>
            {chatogaries && chatogaries.map((chatogary,i)=>(
                <li className="chatogary" key={i}>
                    <Chatogary chatogary={chatogary}/>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Chatogaries