import {Button} from '@mui/material';
import axios from 'axios';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "./Complain.css";

  const Complain = (props) => {
    const history=useNavigate();
    const{_id,name,complainss}=props.complain;
    const deleteHandler=async()=>{
    await axios.delete(`http://localhost:8080/complain/${_id}`)
    .then(res=>res.data)
    .then(()=>history("/"))
    .then(()=>history("/complain"));
  }  
  return (
    <div className='card3'>
        <h1>Name: {name}</h1>
        <h2>Complain:{complainss}</h2>
        
        <Button className='bt' LinkComponent={Link} to={`/complain/${_id}`}  sx={{mt:"auto"}}>Update</Button><br></br>
        <Button className='bt' onClick={deleteHandler}  sx={{mt:"auto"}}>Delete</Button>
    </div>
  );
};

export default Complain