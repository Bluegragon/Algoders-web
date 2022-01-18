import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { Container, Typography } from '@mui/material';
import { Button } from '@mui/material';

export default function ColorTextFields() {
  return (<div style={{display:'flex',justifyContent:'center',flexDirection:'column',background:'url(https://previews.123rf.com/images/regenerationxl/regenerationxl1701/regenerationxl170100720/70123545-sfondo-con-forme-geometriche-con-spazio-nel-mezzo-utile-per-gli-sfondi-aziendali-e-molti-altri-sfond.jpg)',backgroundRepeat:'none'}}>
      
       <Container sx={{height:'100vh',width:'100vw',display:'flex',justifyContent:'center',flexDirection:'row',backgroundRepeat:'none'}}>
          
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 3, width: '45ch' },display:'flex',justifyContent:'center',flexDirection:'column'
      }}
      noValidate
      autoComplete="off"

    >
     
      <TextField label="Full Name" variant="filled" color="success" focused />
      <TextField label="Email" variant="filled" color="success" focused />
      <TextField label="Address" variant="filled" color="success" focused />
      <TextField label="City" variant="filled" color="success" focused />
      <TextField label="Zip" variant="filled" color="success" focused />
      <TextField label="Telephone" variant="filled" color="success" focused />
      <TextField label="Start Date" variant="filled" color="success" focused  type='date'/>
      <label for="myfile">Select a file:</label>
<input type="file" id="myfile" name="myfile"/>
<Button variant="contained" size='large' color="success"  sx={{display:'block',}}>Apply For mentor</Button>
    </Box></Container></div>
  );
}
