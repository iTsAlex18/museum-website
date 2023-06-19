import React from 'react';
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import min from "../images/min.jpeg";
import minst from "../images/minerost.jpeg";
import min2 from "../images/min2.jpeg";
import min3 from "../images/min3.jpeg";
import img1s4 from '../images/gallery/sala4/figura1_sala4.jpeg';
import img2s4 from '../images/gallery/sala4/figura2_sala4.jpeg';
import img3s4 from '../images/gallery/sala4/figura3_sala4.jpeg';

export default function Sala4() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={min} />
                </HeaderContainer>
                <br />
                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Mineros</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={minst} width={50} />
                    <BannerContent>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Entre 1880 y 1910, la minería de Cananea vivió un periodo de auténtica restructuración 
                        y modernización productivas que siguió a más de un siglo de inestabilidad y franco-estancamiento 
                        (prácticamente desde el descubrimiento de las minas), y que fue en gran medida, desde mediados de 
                        los 1880’s, una actividad concebida, dirigida y orientada por los intereses de comercios extranjeros, 
                        particularmente norteamericanos.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={min2} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Año de 1900, Nace el siglo XX, Cananea comienza a vivir su historia y su gran industria minera.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Trabajando en el subterráneo   de manera peligrosa. Así morían muchos mineros 
                        aplastados y así los que no morían, a los años se deterioraban al trabajar tanto 
                        tiempo en la mina y eran despedidos sin compensación por el desgaste del cuerpo.
                        Los sistemas de trabajo y la necesidad de los hombres de sobrevivir hacen que los 
                        patrones lleguen a establecer sistemas de explotación y hombres empiecen a despertar 
                        de aquel primer letargo, los reclamos se comienzan a escuchar, pero es más fuerte el poder 
                        y la fuerza. Pese a esto los obreros se sublevan contra sus injustos patrones y sus capataces. 
                        El gobierno de Porfirio Diaz apoya al capitalista extranjero y le da más garantía.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                
                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={min3} width={50} />
                    <BannerContent>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        En octubre de 1911, poco antes de asumir la presidencia Francisco I. Madero, 
                        estallaron huelgas en las empresas mineras En el libro Minero se relata una Huelga 
                        que estalla el 05 de abril de 1940 una huelga que duro 6 meses de desesperación y esperanzas 
                        destrozadas, los gringos sabían que era cuestión de esperar para dar el golpe de gracia y lo dieron 
                        a partir de esa derrota la lucha sindical en Cananea sufrió una reorganización completa.
                        </BannerDescription>
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
        img: img1s4,

    },
    {
        img: img2s4,

    },
    {
        img: img3s4,

    },
];

