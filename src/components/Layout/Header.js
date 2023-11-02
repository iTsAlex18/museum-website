import React, { useState } from "react";
import {AppBar,Box,Divider,Drawer,IconButton,Toolbar,Typography,} from "@mui/material";
import Logo from "../../images/EscudoSonoraGobierno-05.png"
import Logo2 from "../../images/LOGO Secretarias VA-01.png"
import MuseumIcon from '@mui/icons-material/Museum';
import MenuIcon from "@mui/icons-material/Menu";
import { NavLink } from "react-router-dom";
import "../../styles/HeaderStyles.css";
const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  // handle menu click
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  //menu drawer
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Typography
        color={"black"}
        variant="h6"
        component="div"
        sx={{ flexGrow: 1, my: 2 }}
      >
        <MuseumIcon/>
          Museo de la Lucha Obrera
      </Typography>
      <Divider />
      <ul className="mobile-navigation">
        <li>
          <NavLink activeClassName="active" to={"/"}>
            Home
          </NavLink>
        </li>
        <li>
          <NavLink to={"/horario"}>Horario</NavLink>
        </li>
        <li>
          <NavLink to={"/indice"}>Índice </NavLink>
        </li>
        <li>
          <NavLink to={"/historia"}>Historia </NavLink>
        </li>
      </ul>
      <img src={Logo2} alt="logo" height={"250"} />
    </Box>
  );
  return (
    <>
      <Box>
        <AppBar component={"nav"} sx={{ bgcolor:'#960E53'}}>
          <Toolbar>
            <IconButton
              color="black"
              aria-label="open drawer"
              edge="start"
              sx={{
                mr: 2,
                display: { sm: "none" },
              }}
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </IconButton>
            <img src={Logo} alt="logo" height={"110"} width="200"/>
            <Typography
              color={"white"}
              variant="h4"
              component="div"
              sx={{ flexGrow: 1 }}
              fontFamily={"Roboto Serif"}
            >
              Museo de la Lucha Obrera
            </Typography>
            <Box sx={{ display: { xs: "none", sm: "block"} }}>
              <ul className="navigation-menu">
                <li>
                  <NavLink activeClassName="active" to={"/"} style={{color:"white", fontSize:"20px"}}>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to={"/horario"} style={{color:"white", fontSize:"20px"}}>Horario</NavLink>
                </li>
                <li>
                  <NavLink to={"/indice"} style={{color:"white", fontSize:"20px"}}>Índice </NavLink>
                </li>
                <li>
                  <NavLink to={"/historia"} style={{color:"white", fontSize:"20px"}}>Historia y Galería</NavLink>
                </li>
              </ul>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: "240px",
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box>
          <Toolbar />
        </Box>
      </Box>
    </>
  );
};

export default Header;