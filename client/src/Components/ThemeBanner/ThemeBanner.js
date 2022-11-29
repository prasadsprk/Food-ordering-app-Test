import { Button, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import Swiggy from '../../Images/swiggy.webp'


const ThemeBanner = () => {
  return (
    <>
    <Typography variant="h2" component="h2"
    sx={{textAlign:"center"}}>
    
  </Typography>
  <div className='outer_layer'> 
    <div className='left_details'>
        <Typography variant='h5'>
        Order food from favourite restaurants near you.
        </Typography>
        <Link to="/NearbyHotels" style={{textDecoration:"none"}}>
        <Button variant='contained' href="">Search Hotels</Button>
        </Link>
    </div>
    <div className='right_details'>
    
    </div>
    </div>
  </>
  )
}

export default ThemeBanner