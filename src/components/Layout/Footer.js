import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Box, Typography, Button } from "@mui/material";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
    
      <Box
        sx={{ textAlign: "center", bgcolor: "#1A1A19", color: "white", p: 3 }}
      >
        <Box
          sx={{
            my: 3,
            "& svg": {
              fontSize: "60px",
              cursor: "pointer",
              mr: 2,
            },
            "& svg:hover": {
              color: "goldenrod",
              transform: "translateX(5px)",
              transition: "all 400ms",
            },
          }}
        >
          {/* icons */}
          <Button>
            <NavLink to={"https://www.facebook.com/MuseoLuchaObrera/"}>
          <FacebookIcon />
          </NavLink>
          </Button>
          <Button>
            <NavLink to={"https://twitter.com/ISCsonora/"}>
          <TwitterIcon />
          </NavLink>
          </Button>
        </Box>
        <Typography
          variant="h5"
          sx={{
            "@media (max-width:600px)": {
              fontSize: "1rem",
            },
          }}
        >
          Copyright &copy; Instituto Sonorense de Cultura 2022
        </Typography>
      </Box>
    </>
  );
};

export default Footer;