import React from 'react'
import Layout from '../components/Layout/Layout'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import teatro from "../images/teatro.jpeg";
import img1s10 from '../images/gallery/sala10/figura1_sala10.jpeg'
import img2s10 from '../images/gallery/sala10/figura2_sala10.jpeg'
import img3s10 from '../images/gallery/sala10/figura3_sala10.jpeg'
import img4s10 from '../images/gallery/sala10/figura4_sala10.jpeg'
import img5s10 from '../images/gallery/sala10/figura5_sala10.jpeg'
import img6s10 from '../images/gallery/sala10/figura6_sala10.jpeg'
import img7s10 from '../images/gallery/sala10/figura7_sala10.jpeg'
import img8s10 from '../images/gallery/sala10/figura8_sala10.jpeg'
import img9s10 from '../images/gallery/sala10/figura9_sala10.jpeg'
import img10s10 from '../images/gallery/sala10/figura10_sala10.jpeg'
import img11s10 from '../images/gallery/sala10/figura11_sala10.jpeg'
import img12s10 from '../images/gallery/sala10/figura12_sala10.jpeg'
import img13s10 from '../images/gallery/sala10/figura13_sala10.jpeg'
import img14s10 from '../images/gallery/sala10/figura14_sala10.jpeg'

export default function Sala1() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={teatro} />
                </HeaderContainer>
                <br />

                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>El Teatro Estudio (XEFQ)</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerContent>
                        <Typography variant="h4">Vida cotidiana.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Este hermoso mineral era muy modernos y polifacético desde su gente hasta su desarrollo considerado una ciudad cosmopolita.
                        Cananea ciudad de gente progresista, ofrecida diversidad, porque en ella había todo lo que esos años solo se veía en una ciudad 
                        grande, se impartían clases de inglés, francés y música, lo mejor era que tanto mexicanos como extranjeros se interesaban por todo eso 
                        y convivían en sana paz. 
                        Desde que Mr. Greene arribo a la Cananea, el mineral adquiere su propia zona comercial. Iniciando en la Av. Juárez, antes The Main Street.  
                        El centro histórico aún conserva vestigios de ese pasado que se ve reflejado en su arquitectura, sus calles, su gente y su forma de vivir.</BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <br />

                <h1 style={{ fontFamily: '"BlinkMacSystemFont"', textAlign: 'center', marginTop: '15px' }}>Galería</h1>
                <Box sx={{ marginTop: "15px" }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                        {itemData.map((item) => (
                            <ImageListItem key={item.img}>
                                <img
                                    src={`${item.img}?w=248&fit=crop&auto=format`}
                                    srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                    alt={item.title}
                                    loading="lazy"
                                />
                            </ImageListItem>
                        ))}
                    </ImageList>
                </Box>
                <br />

            </Layout>
        </>
    )
}

const itemData = [
    {
      img: img1s10,
  
    },
    {
      img: img2s10,
  
    },
    {
      img: img3s10,
  
    },
    {
        img: img4s10,
    
    },
    {
        img: img5s10,
    
    },
    {
        img: img6s10,
    
    },
    {
        img: img7s10,
    
    },
    {
        img: img8s10,
    
    },
    {
        img: img9s10,
    
    },
    {
        img: img10s10,
    
    },
    {
        img: img11s10,
    
    },
    {
        img: img12s10,
    
    },
    {
        img: img13s10,
    
    },
    {
        img: img14s10,
    
    },
  ];
