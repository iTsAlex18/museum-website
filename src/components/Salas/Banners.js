import { styled } from "@mui/material/styles";
import { Box, Typography } from "@mui/material";
import { Colors } from "../../styles/theme";

export const BannerContainer = styled(Box)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    padding: '0px 0px',
    background: Colors.orange,
    [theme.breakpoints.down('sm')]: {
        flexDirection: 'column',
        alignItems: 'center'
    }
}));

export const BannerImage = styled('img')(({src, theme}) => ({
    src:`url(${src})`,
    width: '550px',
    borderRadius: '15px',
    [theme.breakpoints.down('md')]: {
        width: '280px'
    },

    [theme.breakpoints.down('sm')]:{
        with: '320px',
        height: '350px'
    }
}));

export const BannerContent= styled(Box)(() => ({
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    maxWidth: '420cm',
    padding: '30px'
}));

export const BannerTitle = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    fontSize: '72px',
    marginBottom: '20px',
    [theme.breakpoints.down('sm')]: {
        fontSize:'42px'
    }
}));

export const BannerDescription = styled(Typography)(({theme}) => ({
    lineHeight: 1.5,
    letterSpacing: 1.25,
    marginBottom: '3em',
    textAlign: 'justify',
    [theme.breakpoints.down('md')]: {
        lineHeight: 1.15,
        letterSpacing: 1.15,
        marginBottom: '1.5em',
        textAlign: 'justify'
    },
}));