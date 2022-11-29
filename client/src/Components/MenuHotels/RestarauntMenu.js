import React from 'react'
import { Container } from '@mui/material'
import MenuHotels from '../MenuHotels/MenuHotels'
import FoodCard from '../MenuHotels/FoodCard'

const RestarauntMenu = ({handleClick}) => {
  return (
    <Container style={{marginTop: '5%' , display : 'flex' , flexDirection: 'column' , alignItems: 'center'}}>
        {MenuHotels.map(product => (
          <FoodCard key={product.id} product={product} handleClick={handleClick} />  
        ))}

    </Container>
  )
}

export default RestarauntMenu