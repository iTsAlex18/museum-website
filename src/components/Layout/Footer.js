import React from "react";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import { Instagram } from "@mui/icons-material";
import { YouTube } from "@mui/icons-material";
import Logo from "../../images/LogotGobiernoSonora_C.png"
import { Box, Typography} from "@mui/material";
const Footer = () => {
  return (
    <>
    
      <Box
        sx={{ textAlign: "center", bgcolor: "#410123", color: "white", p: 3 }}
      >
        <img src={Logo} alt="logo" height={"110"} width="200"/>
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
          

          <a href="https://www.facebook.com/MuseoLuchaObrera/" aria-label="Facebook" target="_blank" rel="nofollow"><i class="fab fa-facebook " aria-hidden="true" title="Facebook"></i>
          <FacebookIcon style={{color:"white", marginRight:"10px"}}  />
          </a>
          <a href="https://www.twitter.com/gobiernosonora" aria-label="Twitter" target="_blank" rel="nofollow"><i class="fab fa-twitter " aria-hidden="true" title="Twitter"></i>
          <TwitterIcon  style={{color:"white", marginLeft:"10px"}} />
          </a>
          <a href="https://www.instagram.com/gobiernodesonora" aria-label="Instagram" target="_blank" rel="nofollow"><i class="fab fa-instagram " aria-hidden="true" title="Instagram"></i>
          <Instagram style={{color:"white", marginRight:"10px"}}/>
          </a>
          <a href="https://www.youtube.com/c/GobiernodeSonoraTV" aria-label="Youtube" target="_blank" rel="nofollow"><i class="fab fa-youtube " aria-hidden="true" title="Youtube"></i>
          <YouTube style={{color:"white", marginLeft:"10px"}}/>
          </a>

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