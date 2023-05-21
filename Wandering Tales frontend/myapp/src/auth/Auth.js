import { Button, FormLabel, TextField, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { sendAuthRequest } from '../api-helpers/helpers';
import { authActions } from '../store';


const Auth = () => {
  const navigate=useNavigate();
  const dispatch=useDispatch();

  const [isSignup, setisSignup] = useState(false);
  const onResRecieved=(data)=> {
    if(isSignup){
      localStorage.setItem("userId", data.user._id);
    }
    else{
      localStorage.setItem("userId",data.id);
    }
    dispatch(authActions.login());
    navigate("/diaries");
  }
  const handleSubmit=(e)=>{
    e.preventDefault();
    console.log(inputs);

    if(isSignup){
      sendAuthRequest(true,inputs)
      .then(onResRecieved)
      .catch((err)=> console.log(err));
    }
    else{
      sendAuthRequest(false,inputs)
      .then(onResRecieved)
      .catch((err)=> console.log(err));
    }
  };
  const [inputs, setInputs] = useState({name:"" ,email:"",password:""});
  const handleChange=(e)=>{
    setInputs((prevState)=>({
      ...prevState,
    [e.target.name]: e.target.value,
    }))
  }
  return (
    <Box width="40%" 
    borderRadius={10} 
    boxShadow={'5px 50px 10px #ccc'}
    margin="auto"
    marginTop={10}
    >
    <form onSubmit={handleSubmit}>
    <Box 
    display="flex"
    flexDirection={"column"}
    width="60%"
    padding={5}
    margin="auto"
    >
      <Typography variant='h4' textAlign="center" padding={1}>
      {isSignup ? "Signup":"Login"}
      </Typography>
     {isSignup && (
      <>
      <FormLabel>Name</FormLabel>
      <TextField 
      onChange={handleChange}
      value={inputs.name} name="name" margin="normal" />
      </>
      )}
      <FormLabel>Email</FormLabel>
      <TextField 
      onChange={handleChange}
      value={inputs.email} name="email" margin="normal" />

      <FormLabel>Password</FormLabel>
      <TextField 
      onChange={handleChange}
      value={inputs.password} name="password" margin="normal" />
      <Button sx={{mt:2, borderRadius:10 , backgroundColor:"#cdb891" , color:'white'}} type="submit" variant='contained'>
      {isSignup ? "Signup":"Login"}
      </Button>
      <Button 
      onClick={()=>setisSignup(!isSignup)}
      sx={{mt:2 ,borderRadius:10, backgroundColor:"#cdb891" , color:"white"}}  variant='outlined'>
      
      Change to {isSignup ? "Login":"Signup"}
      </Button>
    </Box>  
     </form>
    </Box>

  )
}

export default Auth;