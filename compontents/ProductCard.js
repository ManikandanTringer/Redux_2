import * as React from 'react';

import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { CardMedia } from '@mui/material';


export default function ProductCard(props) {
  return (<Card sx={{ maxWidth: 345 }} >
    <CardMedia
      component="img"
      height="140"
     // image="./logo"
      alt="green iguana"
    />
    <CardContent>
      <Typography gutterBottom variant="h5" component="div">
        Product data
      </Typography>
      <Typography variant="body2" color="text.secondary">
      <h3>Product ID : {this.props.productId}</h3>
     <h3>Product Name : {this.props.productName}</h3>
     <h3>Product Description : {this.props.description}</h3>
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small">Share</Button>
      <Button size="small">Learn More</Button>
    </CardActions>
  </Card>
  );
}


