import React from 'react'
import Layout from '../components/Layout/Layout.js';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import hospital from "../images/hospital.jpeg";
import hos from "../images/hos.jpg";
import arte from "../images/arte.jpeg";
import img1s9 from '../images/gallery/sala9/figura1_sala9.jpeg'
import img2s9 from '../images/gallery/sala9/figura2_sala9.jpeg'
import img3s9 from '../images/gallery/sala9/figura3_sala9.jpeg'
import img4s9 from '../images/gallery/sala9/figura4_sala9.jpeg'
import img5s9 from '../images/gallery/sala9/figura5_sala9.jpeg'
import img6s9 from '../images/gallery/sala9/figura6_sala9.jpeg'
import img7s9 from '../images/gallery/sala9/figura7_sala9.jpeg'
import img8s9 from '../images/gallery/sala9/figura8_sala9.jpeg'
import img9s9 from '../images/gallery/sala9/figura9_sala9.jpeg'
import img10s9 from '../images/gallery/sala9/figura10_sala9.jpeg'
import img11s9 from '../images/gallery/sala9/figura11_sala9.jpeg'

export default function Sala9() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={hospital} />
                </HeaderContainer>
                <br />

                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Hospital del Ronquillo</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={hos} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Hospital del ronquillo.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        El “hospital del Ronquillo” se construyó con el particular ladrillo rojo, horneado en esta ciudad, aun cuando la disciplina y la tranquilidad imperaba en el nosocomio, 
                        sus pisos de fuerte y fina madera, aún narran la historia de sus pacientes, todavía parecen escucharse los lamentos de los ingresados. Esto nos lleva a recordar cuando se atendía a hombres que 
                        habían sido víctimas de diferentes accidentes en las minas subterráneas que en su materia desaparecieron en los años 40, siendo la última mina en desaparecer “La Colorada” en 1965. 
                        Los accidentes más comunes eran los derrumbes y caídas a los chutes, sin dejar de mencionar atropellamiento ocasionado por los vagones al ser jalados por los obreros y a su vez el trabajador que venía detrás golpeaba al que iba enfrente, 
                        así que las lesiones más frecuentes eran fracturas de pierna, pies y de cintura.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={arte} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Imagen y Progreso.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        La senda de la fotografía inicia en Cananea hacia finales de 1800, capturando las imágenes 
                        del progreso de aquel entonces, así como los pasajes que inmortalizaron inicialmente los primeros 
                        fotógrafos extranjeros que llegaron a la región, otra de las formas de plasmar la imagen y su multiplicidad 
                        fue la llegada de las primeras prensas y encuadernadoras esto a inicios de 1900 que permitían la reproducción 
                        y democratización de la información que contenían los primeros impresos y los documentos de la CCCC.
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
        img: img1s9,

    },
    {
        img: img2s9,

    },
    {
        img: img3s9,

    },
    {
        img: img4s9,

    },
    {
        img: img5s9,

    },
    {
        img: img6s9,

    },
    {
        img: img7s9,

    },
    {
        img: img8s9,

    },
    {
        img: img9s9,

    },
    {
        img: img10s9,

    },
    {
        img: img11s9,

    },
];
