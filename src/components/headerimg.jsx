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
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
  <path fill="#0099ff" fill-opacity="1" d="M0,288L48,266.7C96,245,192,203,288,186.7C384,171,480,181,576,192C672,203,768,213,864,192C960,171,1056,117,1152,133.3C1248,149,1344,235,1392,277.3L1440,320L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" data-darkreader-inline-fill="" style="inline-fill:#007acc;"></path>
</svg>
    </React.Fragment>
  );
}
