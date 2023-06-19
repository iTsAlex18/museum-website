import React from 'react'
import Layout from '../components/Layout/Layout'
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import profiriatoson from "../images/profiriatoson.jpeg";
import porf1 from "../images/porf1.jpeg";
import porf2 from "../images/porf2.jpeg";
import porf3 from "../images/porf3.jpeg";
import redf from "../images/redf.jpeg";
import img1s5 from '../images/gallery/sala5/figura1_sala5.jpeg';
import img2s5 from '../images/gallery/sala5/figura2_sala5.jpeg';
import img3s5 from '../images/gallery/sala5/figura3_sala5.jpeg';

export default function Sala5() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={profiriatoson} />
                </HeaderContainer>
                <br />
                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Porfiriato en Sonora</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={porf1} width={50} />
                    <BannerContent>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Este consorcio seria la base para el monopolio de Greene que abarcaría el 
                        norte de sonora y parte del norte de Chihuahua, siendo su principal eje el 
                        centro metalúrgico de Cananea.
                        Los barrios formados por arquitectura de Norteamérica fueron El Ronquillo, 
                        La Mesa Grande, La Mesa Sur  y Cananea Vieja  se dividían por manzanas, blocks 
                        y lotes, con un acalle principal, llamada Main Street.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={porf2} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Marzo 1904.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Poco durarían los sueños a Wiliam C. Greene de construir un pequeño imperio. 
                        No logro superar la relación de dependencia del complejo minero metalúrgico de 
                        Cananea con la inversión e insumos tecnológicos provenientes de Nueva York, lo 
                        que lo llevo a finales de 1906 y 1907, en plena crisis, entregar sus empresas a 
                        las gigantes de Estándar Oil, Anaconda Copper, Phelps Dodge y Amalgamated Copper.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={porf3} width={50} />
                    <BannerContent>
                        <Typography variant="h4">El porfiriato en Sonora: Agravios que reparte el progreso.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        La presencia y el radio de acción del ejército federal aumento considerablemente 
                        en la entidad para combatir a los yaquis rebeldes y para que los gobiernos federal 
                        y estatal aplicaran una política de portación de familias yaquis al estado de Yucatán, 
                        que les causó una honda herida. La envergadura del conflicto se puede apreciar por los 
                        proyectos de expatriación en masa de los yaquis, de convertir en territorio federal el 
                        distrito de Guaymas y Mazatlán lo había sido hacia 1852 y de su completa ocupación militar. 
                        La labor cartográfica de la Comisión Geográfico Exploradora para los valles del Yaqui y Mayo en el 
                        estado de Sonora y el alcance de la llamada "Campaña del Yaqui" como campo de entrenamiento de jefes 
                        y oficiales del ejército porfirista rendian sus frutos. De la Comisión Geográfico Exploradora puede 
                        apreciarse su influencia en los primeros mapas gubernamentales que sirvieron para subdividir y apropiar 
                        el agua y la tierra en los valles del Yaqui y Mayo.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={redf} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Red Ferroviaria.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        La construcción del ferrocarril del Sudpacífico-en 1881 se termino el tramo 
                        de Guaymas-Hermosillo; en 1882 Hermosillo-Nogales;  en 1907 Empalme-Navojoa-Álamos, 
                        y en 1912 hasta Tepic-  siendo la obra mas notable del porfiriato en la entidad;  
                        reforzando el eje comercial Nogales-Hermosillo a expensas del puerto de Guaymas, favoreciendo 
                        la colocación de productos estadounidenses por encima de los europeos y engancho  a la economía 
                        regional con la estadounidense- un patrón que ha durado hasta nuestros días -; además que reforzo 
                        la pacificación de la entidad al permitir la movilidad de las fuerzas públicas, aun en temporada de 
                        lluvias.
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
        img: img1s5,

    },
    {
        img: img2s5,

    },
    {
        img: img3s5,

    },
];


