import { styled } from "@mui/material/styles";
import { Box } from "@mui/material";

export const HeaderContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const HeaderImage = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width: '100%',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
        width: '100%'
    },

    [theme.breakpoints.down('sm')]:{
        with: '100%',
        height: '320px'
    }
}));
