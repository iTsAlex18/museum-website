import { createTheme } from "@mui/material/styles";

export const Colors = {
    primary: "#00a152",
    secondary: "#b2102f",
    success: "#4CAF50",
    info: "#00a2ff",
    danger: "#FF5722",
    warning: "#FFC107",
    dark: "#0e1b20",
    light: "#aaa",
    muted: "#abafb3",
    border: "#DDDFE1",
    inverse: "#2F3D4A",
    shaft: "#333",
    ///////////////
    // Grays
    ///////////////
    dim_grey: "#696969",
    dove_gray: "#d5d5d5",
    body_bg: "#f3f6f9",
    ////////////////
    // Solid Color
    ////////////////
    white: "#fff",
    black: "#000",
    brown: "#D9965B",
    blue: "#2196f3",
};

const theme = createTheme({
    palette: {
        primary: {
            main: Colors.primary
        },
        secondary: {
            main: Colors.secondary
        }
    },

    components: {
        MuiButton: {
            defaultProps: {
                disableRipple: true,
                disableElevation: true
            },
        },
        MuiDrawer:{
            styleOverrides:{
                paper:{
                    width: 250,
                    background: Colors.shaft,
                    color: Colors.white,
                    borderRadius: '0px 100px 0px 0px',
                    borderRight: `5px solid ${Colors.orange}`
                }
            }
        },
    },
    
});

export default theme;