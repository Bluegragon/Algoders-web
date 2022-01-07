import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { Typography } from '@mui/material';

export default function HeaderimgContainer() {
  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth="100%" sx={{paddingTop:'2rem'}}>
      <Box
        component="img"
        sx={{
          display:'inline-flex',
          flexDirection:'column4',
          justifyContent:'center',
          alignContent:'center',
          flexWrap: 'wrap',
          height: 550,
          maxWidth: '50%',
         
        }}
        alt="The house from the offer."
        src="https://media.nature.com/lw800/magazine-assets/d41586-019-00653-5/d41586-019-00653-5_16459152.jpg"
      /><Box  sx={{
        display:'inline-flex',
        flexDirection:'column',
        alignContent:'center',
        flexWrap: 'wrap',
        background:"#aed581",
        height: 550,
        minWidth: '20rem',
        maxWidth: '50rem',

      }}><Typography
      variant="h6"
      component="div"
      sx={{ color:'black' }}
    >
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus ipsum dolores eum quibusdam ipsa eaque officia necessitatibus laudantium, ipsam earum numquam cumque quam nulla nam sequi maxime dignissimos dolorum repellendus.
    </Typography> </Box>
      </Container>
    </React.Fragment>
  );
}
