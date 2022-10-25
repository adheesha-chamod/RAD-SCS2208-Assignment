import React ,{useState} from 'react';
import {Box} from "@mui/system";
import axios from "axios";
import {FormLabel,TextField, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AddBook = () => {
    const history=useNavigate();
  const [inputs,setInputs]=useState({
    name:'',
    author:'',
    chatogary:'',
    link:'',
    image:''
  });

const sendRequest =async()=>{
    axios.post("http://localhost:8080/books",{
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
    sendRequest().then(()=>history('/books'));
  } ; 

  return (
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
            <Button variant="contained" type="submit">Add Book</Button>
        
        </Box>
    </form>
  )
}

export default AddBook