import React ,{useState} from 'react';
import {Box} from "@mui/system";
import axios from "axios";
import {FormLabel,TextField, Button} from "@mui/material";
import { useNavigate } from 'react-router-dom';

const AddComplain = () => {
    const history=useNavigate();
  const [inputs,setInputs]=useState({
    name:'',
    complainss:''
  });

const sendRequest =async()=>{
    axios.post("http://localhost:8080/complain",{
        name:String(inputs.name),
        complainss:String(inputs.complainss)
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
    sendRequest().then(()=>history('/complain'));
  } ; 

  return (
    <form onSubmit={handleSubmit}>
        <Box display="flex" flexDirection="column" justifyContent={"center"} maxWidth={700} alignContent={"center"} alignSelf="auto" marginLeft={"auto"} marginRight="auto" marginTop={10} >
            <FormLabel>Name</FormLabel>
            <TextField value={inputs.name} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="name"/>
            <FormLabel>Complain</FormLabel>
            <TextField value={inputs.complainss} onChange={handleChange} margin="normal" fullWidth variant="outlined" name="complainss"/>
            <Button variant="contained" type="submit">Add Complain</Button>
        
        </Box>
    </form>
  )
}

export default AddComplain