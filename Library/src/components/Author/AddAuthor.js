import React ,{useState} from 'react';
import {Box} from "@mui/system";
import axios from "axios";
import {FormLabel,TextField, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AddAuthor = () => {
    const history=useNavigate();
  const [inputs,setInputs]=useState({
    name:'',
    language:''
  });

const sendRequest =async()=>{
    axios.post("http://localhost:8080/author",{
        name:String(inputs.name),
        language:String(inputs.language)
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
    sendRequest().then(()=>history('/author'));
  } ; 

  return (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf="auto" marginLeft={"auto"} marginRight="auto" marginTop={10} >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>
            <FormLabel>Language</FormLabel>
            <TextField value={inputs.language} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="language"/>
            <Button variant="contained" type="submit">Add Author</Button>
        
        </Box>
    </form>
  )
}

export default AddAuthor