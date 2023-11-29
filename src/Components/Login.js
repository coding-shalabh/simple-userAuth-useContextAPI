// Home.js

import React, {  useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import { IconButton, TextField } from '@mui/material';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/context';



const style = {
    display: 'flex',
    flexDirection: 'column',
    padding: '30px',
}


const Login = () => {
    
    const {auth, setAuth, userData, setUserData} = useAuth();
    const [user, setUser] = useState({});
    const navigate = useNavigate();
    
    
    const handleInputChange = (val, type)=> {
        setUser((prev)=> ({
            ...prev,
            [type]: val
        }))
    }
    
    const loginUser = async()=> {
        try {
            
          const res = await axios.get('https://jsonplaceholder.typicode.com/users');
          
          const currentUser = [...res.data].filter((item)=> item.email === user.email);
          
          if(currentUser.length > 0){
              setAuth(true);
              setUserData({...currentUser[0]});
              console.log(currentUser[0]);
            }
    } catch (error) {
        console.log(error);
    }
  }

  useEffect(() => {
            if(auth){
                console.log(userData);
                navigate('/about');
            }
  }, [userData]);

  return (
    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} sx={style}>
      <TextField  color='black' variant='outlined' label="Username" onChange={(e)=> handleInputChange(e.target.value, 'username')} sx={{background: '#fff', borderRadius: '8px', width:'400px'}}/>
      <TextField color='black' id='email' type='text' onChange={(e)=> handleInputChange(e.target.value, 'email')} label="email" placeholder='Password' sx={{marginTop: '20px',background: '#fff', borderRadius: '8px', width:'400px'}}></TextField>
      <IconButton sx={{marginTop: '20px', background: '#000', color: '#fff'}} onClick={loginUser}><ArrowRightAltIcon/></IconButton> 
    </Box>
  );
};

export default Login;