import React, { useState } from 'react'
import {AppBar, Tab, Tabs, Toolbar, Typography} from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import {NavLink} from 'react-router-dom';

const Header = () => {
    const [value, setValue] = useState();
  return (
    <div>
        <AppBar sx={{backgroundColor:"#000000"}} position='sticky'>
            <Toolbar>
                <NavLink to="/" style={{color:"white"}}>
                <Typography>
                    <LibraryBooksIcon/>
                </Typography></NavLink>
                <Tabs 
                sx={{ml:"auto"}} 
                textColor='inherit' 
                indicatorColor='secondary' 
                value={value} 
                onChange={(e,val)=>setValue(val)}>
                    <Tab LinkComponent={NavLink} to="/books" label="Books"/>
                    <Tab LinkComponent={NavLink} to="/add" label="Add Book"/>
                    {/* <Tab LinkComponent={NavLink} to="/about" label="About us"/> */}
                    <Tab LinkComponent={NavLink} to="/chatogary" label="Chatogaries"/>
                    <Tab LinkComponent={NavLink} to="/addchatogary" label="Add Chatogary"/>
                    <Tab LinkComponent={NavLink} to="/author" label="Authors"/>
                    <Tab LinkComponent={NavLink} to="/addauthor" label="Add Author"/>
                    <Tab LinkComponent={NavLink} to="/complain" label="Complains"/>
                    <Tab LinkComponent={NavLink} to="/addcomplain" label="Add Complain"/>




                </Tabs>
            </Toolbar>
        </AppBar>
    </div>
  );
};

export default Header;