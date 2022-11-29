import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Link} from 'react-router-dom'


const HotelCards = ({hotelnames}) => {
  
  return (
    <div >
    <Card sx={{ maxWidth: 345 , marginTop:"25%"}}>
      <CardMedia
        component="img"
        height="180"
        image={hotelnames.image}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {hotelnames.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
            {hotelnames.description}
        </Typography>
      </CardContent>
      <Link to='/menu' style={{textDecoration:"none"}}>
      <CardActions >
        
      <Button variant="contained">Menu</Button>
        
      </CardActions>
      </Link>
    </Card>
    </div>
  );
}

export default HotelCards;