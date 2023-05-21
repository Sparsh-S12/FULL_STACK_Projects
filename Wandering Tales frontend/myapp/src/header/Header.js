import React, { useState } from 'react'
import {AppBar,Tabs,Tab,Toolbar } from '@mui/material';
import ExploreIcon from '@mui/icons-material/Explore';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
const linksArr=["home","diaries","auth"];
const loggedInLinks=["home","diaries","add","profile"];
const Header = () => {
  const isLoggedIn=useSelector((state)=> state.isLoggedIn)


    const [value, setValue] = useState();
  return (
    <AppBar sx={{bgcolor:"transparent",position:"sticky"}}>
        <Toolbar>
        <ExploreIcon sx={{color:'#C29B6A'}}/>
        
        <Tabs 
        value={value} 
        onChange={(e,val)=>setValue(val)} 
        sx={{textDecoration:"none" ,ml:"auto"}}>
        {isLoggedIn?

          loggedInLinks.map((link)=> (
        <Tab 
        LinkComponent={Link}
        to={`/${link==="home" ? "" :link}`}
        sx={{
            textDecoration:"none", ":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"20px",
                color:"#C29B6A"
            },
        }} 
        key={link} 
        label={link}

        />
        ))
        
        :linksArr.map((link)=> (
        <Tab 
        LinkComponent={Link}
        to={`/${link==="home" ? "" :link}`}
        sx={{
            textDecoration:"none", ":hover":{
                textDecoration:"underline",
                textUnderlineOffset:"20px",
                color:"#C29B6A"
            },
        }} 
        key={link} 
        label={link}

        />
        ))}
        </Tabs>
        </Toolbar>
    </AppBar>
  )
}

export default Header;