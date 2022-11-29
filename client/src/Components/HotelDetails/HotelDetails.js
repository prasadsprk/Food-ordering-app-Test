import React from 'react';

import HotelNames from '../HotelDetails/HotelNames'

import HotelCards  from '../HotelDetails/HotelCards';
import Hotelscss from '../HotelDetails/HotelCards.css' 


const HotelDetails = () => {

  return (
    
      <div className='hotel_outer' id='products'>
        <div className='Hotel_info'> 
           {HotelNames.map(data => (
            <HotelCards key={data.id} hotelnames={data} />
          ))}  
      </div>
      </div>
    
    ) 
  
};

export default HotelDetails