import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { Link } from 'react-router-dom';

import Logo from "./algo.jpeg";



const pages1 = ['home', 'blogs', 'create'];
const pages = ['home', 'blogs', 'Browse'];

const settings = [ 'profile', 'Logout'];



const ResponsiveAppBar = () => {
  const [isMentor, setMentor] = React.useState(true);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="sticky">
      <Container  maxWidth="x2" sx={{background: ' linear-gradient(0deg, rgba(61,207,44,1) 11%, rgba(52,125,92,1) 100%)' , color:'white',}}>
        <Toolbar disableGutters>
        <Box
            component="img"
            sx={{
            height: 50,
            border:'1px',
            borderStyle:'solid',
            borderColor:'green',
            borderRadius:'50%',
            }}
            alt="Your logo."
            src={Logo}
        />

        
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ mr: 2, display: { xs: 'none', md: 'flex' },paddingLeft:1,fontFamily:'cursive',fontWeight:'bold'}}
          >
            Algoders
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            {isMentor ? <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color:'green',
              }}
            >
              {pages1.map((page1) => (
                <MenuItem key={page1} onClick={handleCloseNavMenu}>
                  <Link to={`/${page1}`}  style={{textDecoration:'none'}} ><Typography textAlign="center">{page1}</Typography></Link>
                
                </MenuItem>
              ))}
            </Menu>: <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
                color:'green',
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Link to={`/${page}`}  style={{textDecoration:'none'}} ><Typography textAlign="center">{page}</Typography></Link>
                
                </MenuItem>
              ))}
            </Menu>}
          </Box>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' },fontFamily:'cursive' }}
          >
            Algoders
          </Typography>
          
         {isMentor ?<Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages1.map((page1) => (
              <Button
                key={page1}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
               <Link to={`/${page1}`} style={{textDecoration:'none',color:'white'}}>{page1}</Link> 
              </Button>
            ))}
          </Box>: <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: 'white', display: 'block', }}
              >
               <Link to={`/${page}`} style={{textDecoration:'none',color:'white'}}>{page}</Link> 
              </Button>
            ))}
          </Box>}

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 ,}}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: '45px', }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting,index) => (
                <MenuItem key={setting} onClick={handleCloseNavMenu}  >

                  <Link to={`/${setting}`}  style={{textDecoration:'none'}} ><Typography textAlign="center">{setting}</Typography></Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;
