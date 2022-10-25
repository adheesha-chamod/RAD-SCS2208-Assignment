import React, {useEffect, useState} from 'react';
import "./Complain";
import axios from 'axios';
import Complain from "./Complain";

const URL="http://localhost:8080/complain";

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data);
};


const Complains = () => {
    const [complains,setComplains]=useState();
    useEffect(()=>{
        fetchHandler().then((data)=>setComplains(data.complains));
    }, []);
    console.log(complains);
    return (
    <div>
        <ul>
            {complains && complains.map((complain,i)=>(
                <li className="complain" key={i}>
                    <Complain complain={complain}/>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Complains