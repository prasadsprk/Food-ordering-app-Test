import React from 'react';

import HotelNames from '../HotelDetails/HotelNames'

import HotelCards  from '../HotelDetails/HotelCards';


const HotelDetails = () => {

  return (
   
      <div>
           {HotelNames.map(data => (
            <HotelCards key={data.id} hotelnames={data} />
          ))}  
      </div>
    ) 
  
};

export default HotelDetails