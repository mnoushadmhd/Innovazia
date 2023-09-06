import React, { Component, useState } from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import styled from '@emotion/styled';
import { Card, Container, Link, Menu, MenuItem, MenuList, Select } from '@mui/material';
import Footer from './Footer';

const drawerWidth = 240;
const navItems = ['SERVICES', 'CLIENTS', 'ABOUT US', 'PLATFORMS', "LET'S TALK"];

function Navbar(props) {
    const [anchorEl, setAnchorEl] = useState(false);
    const handleOpenMenu = (event) => {
        setAnchorEl(!anchorEl);
    };

  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
      <Typography variant="h6" sx={{ my: 2 }}>
        Innovazia
      </Typography>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: 'center' }}>
              <ListItemText primary={item} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container = window !== undefined ? () => window().document.body : undefined;

  return (
    <Container maxWidth="lg">
            <CssBaseline />
 
            <RelativeBox>
            <AppBar component="nav" sx={{background:'transparent',position:'absolute',boxShadow:'none'}}>         
                <Toolbar>
                  <IconButton
                      color="#344097"
                      aria-label="open drawer"
                      edge="start"
                      onClick={handleDrawerToggle}
                      sx={{ mr: 2, display: { lg: 'none' } }}
                  >
                    <MenuIcon />
                  </IconButton>

                <Box sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}>
                        <img src={require('../images/Innovazia.png')}/>
                </Box>
                <NavBox sx={{ display: { xs: 'none', lg: 'flex'} }}>
                    {navItems.map((item) => (
                    <NavButton key={item} sx={{ color: '#000' }}>
                        {item}
                    </NavButton>
                    ))}
                  <Box sx={{position:"relative"}}>
                    <Button
                        onClick={handleOpenMenu}
                    >
                       <img src={require('../images/Frame18.png')}/>
                    </Button>
                      {
                        anchorEl?                    
                      <DropMenu>
                          <MenuItem>Option 1</MenuItem>
                          <MenuItem>Option 2</MenuItem>
                          <MenuItem>Option 3</MenuItem>
                      </DropMenu>:""
                      }
                  </Box>
                </NavBox>
                </Toolbar>
            </AppBar>
            </RelativeBox>
            <nav >
                <Drawer
                container={container}
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', xl: 'none' },
                    '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                }}
                >
                {drawer}
                </Drawer>
            </nav>
            <Box>
              <Outlet/>
            </Box>
            <Footer/>
    </Container>
  );
}
const NavBox=styled(Box)({
    columnGap:'25px'
})
const NavButton=styled(Button)({
    padding:"5px 20px",
    borderRadius:'50px',
    '&:hover':{
        backgroundColor:'#344097',
        color:'#fff'
    }
})

const RelativeBox=styled('div')`
  height: 100%;
  width:100%;
  position:relative;
`

const DropMenu=styled(MenuList)`
box-shadow:rgba(0, 0, 0, 0.2) 0px 5px 5px -3px, rgba(0, 0, 0, 0.14) 0px 8px 10px 1px, rgba(0, 0, 0, 0.12) 0px 3px 14px 2px;
position: absolute !important;
background: #fff;
right:0;
color:#000;
border-radius:4px;

`

// const BannerDesign = styled(Box)`
//   height:100%;
//   background: url(${bannerdef}) no-repeat ;
//   background-position:right;
// `;

export default Navbar;

