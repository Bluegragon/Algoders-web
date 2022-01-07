import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { Box } from '@mui/material';
import { Typography } from '@mui/material';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


export default function Profile() {
  return (
     <Box sx={{display:'inline-flex',justifyContent:"center",width:'100vw',height:'100vh' ,background:' linear-gradient(0deg, rgba(61,207,44,1) 11%, rgba(52,125,92,1) 100%)',}}>
     <Box sx={{display:'inline-flex',justifyContent:"center" ,background:' white',height:{xs:'150vh',xl:'75vh' },borderRadius:{xs:'5%',xl:'20%'},m:5,flexWrap:'wrap',}}>
          
    <Stack direction="row" spacing={2} sx={{p:7}}>
      <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" sx={{p:7,width:'9vw',height:'9vw'}} />
    </Stack>
    <Box>
         <Typography variant='h5'    sx={{p:{xs:3,xl:7}}}>Username</Typography>
         <Typography variant='Body1' sx={{p:{xs:3,xl:7}}}>FirstName</Typography>
         <Typography variant='body1' sx={{p:{xs:3,xl:7}}}>Following</Typography>
         <Typography variant='body1' sx={{p:{xs:3,xl:7}}}>LastName</Typography>
         <Typography variant='body1' sx={{p:{xs:3,xl:3}}}>Description:</Typography>         
         <Typography variant="body2" sx={{p:1,maxWidth:'30vh'}}>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, quis qui eos deserunt praesentium, id officia delectus molestiae, laudantium accusantium incidunt maiores. Quibusdam quia modi rem nulla, ratione tempore odio.</Typography>         
         <Stack> <Link to='/update' style={{textDecoration:'none'}}>
                <Button variant="outlined" color="success">
                  Edit
                </Button></Link><Button variant="outlined" color="success">
                  Edit
                </Button></Stack>
    </Box>   </Box>

   </Box>
  );
}