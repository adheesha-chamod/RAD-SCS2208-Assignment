import React, {useEffect, useState} from 'react';
import "./Author.css";
import axios from 'axios';
import Author from "./Author";

const URL="http://localhost:8080/author";

const fetchHandler=async()=>{
    return await axios.get(URL).then((res)=>res.data);
};


const Authors = () => {
    const [authors,setAuthors]=useState();
    useEffect(()=>{
        fetchHandler().then((data)=>setAuthors(data.authors));
    }, []);
    console.log(authors);
    return (
    <div>
        <ul>
            {authors && authors.map((author,i)=>(
                <li className="author" key={i}>
                    <Author author={author}/>
                </li>
            ))}
        </ul>
    </div>
  );
};

export default Authors