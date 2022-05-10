import * as React from 'react';
import Button from '@mui/material/Button';
import { TextField } from '@mui/material';
import { Box } from '@mui/system';
//import { useState } from "react";
//import { useDispatch } from "react-redux";
//import { addProduct } from "../redux/slice";
import ProductCard from './ProductCard'
import ReactDOM from 'react';
var productId="";
var productName="";
var description="";

export default function ProductForm() {
   
   const handleSubmit = (event) => {
        event.preventDefault();
        // const productDetails = {
        //     productId: {productId},
        //     productName: {productName},
        //     description: {description}
        // }
       // console.log(event.target.productId.value) // from elements property
    //    setproductId(event.target.elements.productId.value) 
    //    setproductName(event.target.elements.productName.value) 
    //    setDescription(event.target.elements.description.value) 
     console.log(productId)
     console.log(productName)
     console.log(description)
    ReactDOM.render(<ProductCard productId={productId} productName={productName} description={description} />,document.getElementById('allCard'));
  //  root1.(
    // <React.StrictMode>
    
    // </React.StrictMode>
    //)
    // setproductId('');
    // setproductName('');
    // setDescription('');
    // <ProductCard/>
        
      }
  
    return (

    <div className='form'>
        <Box sx={{
        width: 300,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <div className='input'>
            
    <TextField required name="productId" label="Product Id" variant="outlined" onChange={(event)=>productId=event.target.value} />
    <TextField required name="productName" label="Product Name" variant="outlined" onChange={(event)=>productName=event.target.value} />
    <TextField required name='description' label="Description" variant="outlined" onChange={(event)=>description=event.target.value}/>
    </div>
    <div className='sumbit'>
    <Button variant="contained" onClick={handleSubmit} >
      Sumbit
    </Button>
    </div>
    </Box>
    </div>
  );
}