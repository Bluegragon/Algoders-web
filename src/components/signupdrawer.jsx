import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { makeStyles } from '@material-ui/styles';
import { Paper } from '@mui/material';
import { Button } from '@mui/material';
import Signupani from './signupanimation';
import { useState } from 'react';
const useStyles=makeStyles({
root:{
 background:'primary',
  p:5,
  marginBlock:4,
}
});
   

export default function SignUpform() {
  const [shrink1, setShrink1] = useState({
    Sh1:false,
    Sh2:false,
    Sh3:false,
    Sh4:false,
    Sh5:false

  })
  const [info, setInfo] = React.useState({
    FirstName:'',
    LastName:'',
    UserName:'',
    Email:'',
    Password:'',
    
  });
 
  const classes=useStyles(); 

  return (
     <div style={{display:"inline-flex",maxHeight:'100vh',flexWrap:'wrap',paddingBlock:5}} >
  
    <Paper sx={{height:'100vh',display:'inline-flex',justifyContent:'center',backgroundImage:'url(https://www.cgiar.org/wp/wp-content/themes/cgiar/assets/images/base_map-c3c5004924.png)',flexDirection:'column',alignContent:'center',paddingTop:8}}>
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 2,  },

        p:4,display:'inline-flex',justifyContent:'center',flexDirection:'column', maxWidth:{xs:'100vw',sm:'100vw',md:'100vw'}
      }}
      noValidate
      autoComplete="off"
    >
     <label style={{fontSize:'5rem',fontFamily:'serif',color:'#0d6505',paddingBlock:4}}>SIGN UP FORM</label>
      <TextField className={classes.root}
        id="outlined-basic"
        label="FirstName"
        onChange={(e)=>{setInfo({FirstName:e.target.value,})}}
        onSelect={() => setShrink1({Sh1:true})}
        InputLabelProps={{ shrink: shrink1 }}
        /> 
      <TextField className={classes.root}
        id="outlined-basic"
        label="LastName"
        value={info.LastName}
        onChange={(e)=>{setInfo({LastName:e.target.value,})}}
        onSelect={() => setShrink1({Sh2:true})}
        InputLabelProps={{ shrink: shrink1 }}
      
        
        /> 
      <TextField className={classes.root}
        id="outlined-basic"
        label="UserName"
        onChange={(e)=>{setInfo({UserName:e.target.value,})}}
        onSelect={() => setShrink1({Sh3:true})}
        InputLabelProps={{ shrink: shrink1 }}
        
        /> 
      <TextField className={classes.root}
        id="outlined-basic"
        label="Email"
        type='email'
        value={info.Email}
        onChange={(e)=>{setInfo({Email:e.target.value,})}}
        onSelect={() => setShrink1({Sh4:true})}
        InputLabelProps={{ shrink: shrink1 }}
        /> 
      <TextField className={classes.root}
        id="outlined-basic"
        label="Password"
        type='password'
        value={info.Password}
        onChange={(e)=>{setInfo({Password:e.target.value,})}}
        onSelect={() => setShrink1({Sh5:true})}
        InputLabelProps={{ shrink: shrink1 }}
        /> 
    </Box><Box width={'100%'} display={'inline-flex'} sx={{justifyContent:'center'}}><Button variant="contained" size='large' color="success"  sx={{display:'block',}}>SIGN UP</Button></Box></Paper>
    <Box  sx={{paddingInline:10, display: { xs: 'none', lg: 'block', xl: 'block' }}}><Signupani/></Box>
    </div>
  );
}
