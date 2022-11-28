import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const HotelCards = ({hotelnames}) => {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
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
      <CardActions>
        <Button size="small">Menu</Button>
        
      </CardActions>
    </Card>
  );
}

export default HotelCards;