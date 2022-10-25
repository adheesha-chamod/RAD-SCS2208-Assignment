import React ,{useEffect, useState} from 'react'
import axios from 'axios';
import {useNavigate, useParams} from "react-router-dom";
import {Box,Button, FormLabel, TextField } from '@mui/material';


const BookDetail = () => {
  const history=useNavigate();
  const [inputs,setInputs]=useState({});
  const id=useParams().id;
  console.log(id);
  useEffect(()=>{
    const fetchHandler=async()=>{
        await axios
        .get(`http://localhost:8080/books/${id}`)
        .then((res)=>res.data).then(data=>setInputs(data.book));
    };
    fetchHandler();
  },[id]) ;
  
  const sendRequest =async()=>{
    await axios.put(`http://localhost:8080/books/${id}`,{
        name:String(inputs.name),
        author:String(inputs.author),
        chatogary:String(inputs.chatogary),
        link:String(inputs.link),
        image:String(inputs.image)
    }).then(res=>res.data);
};
  const handleChange=(e)=>{
    setInputs((prevState)=>({
        ...prevState,
        [e.target.name]:e.target.value,
    }));
  };

  const handleSubmit =(e)=>{
    e.preventDefault();
    console.log(inputs);
    sendRequest().then(()=>history("/books"));
  } ; 
  return (
    <div>
    { inputs && (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf="auto" marginLeft={"auto"} marginRight="auto" marginTop={10} >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>
            <FormLabel>Author</FormLabel>
            <TextField value={inputs.author} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="author"/>
            <FormLabel>Chatogary</FormLabel>
            <TextField value={inputs.chatogary} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="chatogary"/>
            <FormLabel>Link</FormLabel>
            <TextField value={inputs.link} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="link"/>
            <FormLabel>Image</FormLabel>
            <TextField value={inputs.image} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="image"/>
            <Button variant="contained" type="submit">Update Book</Button>
        
        </Box>
    </form>)};
    </div>
  )
}

export default BookDetail