import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Author.css";

  const Author = (props) => {
    const history=useNavigate();
    const{_id,name,language}=props.author;
    const deleteHandler=async()=>{
    await axios.delete(`http://localhost:8080/author/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/author"));
  }  
  return (
    <div className='card2'>
        <h1>Name: {name}</h1>
        <h2>Language: {language}</h2>
        {/* <h2>{_id}</h2> */}
        {/* <a href={link}>Download</a> */}
        
        <Button className='bt' LinkComponent={Link} to={`/author/${_id}`}  sx={{mt:"auto"}}>Update</Button><br></br>
        <Button className='bt' onClick={deleteHandler}  sx={{mt:"auto"}}>Delete</Button>
    </div>
  );
};

export default Author