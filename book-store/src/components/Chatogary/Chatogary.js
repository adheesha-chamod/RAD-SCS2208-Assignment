import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Chatogary.css";

  const Chatogary = (props) => {
    const history=useNavigate();
    const{_id,name}=props.chatogary;
    const deleteHandler=async()=>{
    await axios.delete(`http://localhost:8080/chatogary/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/chatogary"));
  }  
  return (
    <div className='card1'>
        
        <h1>{name}</h1>
        
        <Button className='bt' LinkComponent={Link} to={`/chatogary/${_id}`}  sx={{mt:"auto"}}>Update</Button><br></br>
        <Button className='bt' onClick={deleteHandler}  sx={{mt:"auto"}}>Delete</Button>
    </div>
  );
};

export default Chatogary