import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Book.css";

  const Book = (props) => {
    const history=useNavigate();
    const{_id,name,author,chatogary,link,image}=props.book;
    const deleteHandler=async()=>{
    await axios.delete(`http://localhost:8080/books/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/books"));
  }  
  return (
    <div className='card'>
        <img src={image} alt={name}/>
        <article>By {author}</article>
        <h3>{name}</h3 >
        <h2>{chatogary}</h2>
        {/* <h2>{_id}</h2> */}
        {/* <a href={link}>Download</a> */}
        
        <Button className='bt' href={link}  sx={{mt:"auto"}}>Download</Button><br></br>
        <Button className='bt' LinkComponent={Link} to={`/books/${_id}`}  sx={{mt:"auto"}}>Update</Button><br></br>
        <Button className='bt' onClick={deleteHandler}  sx={{mt:"auto"}}>Delete</Button>
    </div>
  );
};

export default Book