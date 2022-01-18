import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

const useStyles=makeStyles({
  field:{
    display:'block',margin:4,padding:4,

  }
}
)
export default function TemporaryDrawer() {
  const [state, setState] = React.useState(true)
  const [info, setInfo] = React.useState({
    name:'',
    Password:'',
  })
  
  
const toggleDrawer=(open)=>(event)=>{
setState(open)
}
const classes=useStyles();

const forms=()=>(
     <Box
     component="form"
     sx={{
       '& .MuiTextField-root': { m: 1, width: '25vw' },
       display:'block'
     }}
     noValidate
     autoComplete="on"
     
   >
   
   <TextField
  id="outlined-name"
  label="Name"
  value={info.name}
  onChange={(e)=>{  setInfo({name:e.target.value})}}
  className={classes.field}
/>
<TextField
  id="outlined-Password"
  type='password'
  label="Password"
  value={info.Password}
  onChange={(e)=>{  setInfo({Password:e.target.value})}}
  className={classes.field}
/>
<Box sx={{display:'inline-flex',justifyContent:'center',alignContent:'center',padding:8}}>
<Button variant="contained" size='medium' color="success"  sx={{display:'block',}}>LOG IN</Button>
     
</Box>
    
</Box>
)
 

  return (
    <div>
      
          <Drawer
            anchor={'right'}
            open={state}
            onClose={toggleDrawer(false)}
            width={70}
          >
            {forms()}
          </Drawer>
      
    </div>
  );
}
