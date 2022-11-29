import { Typography } from '@mui/material'
import React from 'react'
import WhyChooseUs1 from '../WhyChooseUs/WhyChooseUs1.css'
import Swiggy1 from '../../Images/swiggybanner1.webp'
import Swiggy2 from '../../Images/swiggybanner2.webp'
import Swiggy3 from '../../Images/swiggybanner3.webp'

const WhyChooseUs = () => {
  return (
    <div className='main_div'>

        <div className='inner_div'> 
        <div className='min_order'>
        <img src={Swiggy1}/>
       <Typography variant='h5' sx={{color:"white"}}>
       No Minimum Order
       </Typography>

       <Typography variant='subtitle2' sx={{color:"white"}}>
       Order in for yourself or for the group <br/> with no restrictions on order value
       </Typography>
       </div>

       <div className='order_tracking' >
       <img src={Swiggy2}/>
       <Typography variant='h5' sx={{color:"white"}}>
       Live Order Tracking
       </Typography>

       <Typography variant='subtitle2' sx={{color:"white"}}>
       Know where your order is at all times <br/> from the restaurant to your doorstep
       </Typography>
       </div>

       <div className='delivery'>
       <img src={Swiggy3}/>
       <Typography variant='h5' sx={{color:"white"}}>
       Lightning-Fast Delivery
       </Typography>

       <Typography variant='subtitle2' sx={{color:"white"}}>
       Experience Swiggy's superfast delivery for food <br /> delivered fresh & on time
       </Typography>
       </div>
       </div>
    </div>
  )
}

export default WhyChooseUs