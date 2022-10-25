import { Box, Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import "./Home.css";


const Home = () => {
  return (
    <div className="container">
          {/* <img src='https://images.indianexpress.com/2022/01/E-library.jpg' ></img> */}
          <Box display='flex' flexDirection="column" alignItems="center">
          <Button LinkComponent={Link} to="/books" sx={{marginTop:15, background:'orangered'}} variant="contained">
            <Typography variant="h3">View All Books</Typography>
          </Button>
          </Box>
      </div>
  )
}

export default Home