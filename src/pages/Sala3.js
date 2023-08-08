import React from 'react';
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import mov from "../images/mov.jpeg";
import hue1 from "../images/huelga1.jpeg";
import hue2 from "../images/huelga2.jpeg";
import hue3 from "../images/huelga3.jpeg";
import img1s3 from '../images/gallery/sala3/figura1_sala3.jpeg';
import img2s3 from '../images/gallery/sala3/figura2_sala3.jpeg';
import img3s3 from '../images/gallery/sala3/figura3_sala3.jpeg';

export default function Sala3() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={mov} />
                </HeaderContainer>
                <br />

                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Movimiento Obrero 1906</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={hue1} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Las Muertes Ocurridas en los Tres Días que Duraron los Hechos más Violentos de la Huelga.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                            1) En la maderería ubicada en la calle Octava Este entre Sinaloa y Chihuahua (Hoy Álvaro Obregón), en la tarde del 1 de junio entre mexicanos y americanos.
                        </BannerDescription>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                            2) En la calle Sonora y Tercera Este en la tarde del 1 de junio entre mexicanos y americanos.
                        </BannerDescription>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                            3) Tiene como escenario la zona entre las calles Primera y Tercera Oeste. Principalmente en la Av. Sonora (la cuesta de la gruta) y las vías del tren hasta el puente a Cananea Vieja en El Ronquillo, ocurrido la tarde del día 2 de junio, también entre mexicanos y americanos apoyados por policías mexicanos.
                        </BannerDescription>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                            4) Tiene como escenario toda la ciudad y alrededores una vez que llega el Col. Kosterlitzky y a las 7:00 de la tarde del día 2 de junio inicia el control de la ciudad, reforzándose la represión de los mineros en la mañana del día 3 de junio con la llegada del Gral. Torres, represión que culmina días después, con la captura de los principales líderes huelguistas.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={hue2} width={50} />
                    <BannerContent>
                        <Typography variant="h4">La Huelga.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        La huelga de cananea en 1906 fue un suceso bastante manipulado por las autoridades y Greene, pero particularmente la cuenta de muertos, 
                        pues es solo gracias a testigos presenciales y algunos periódicos de la época que registraron principalmente la muerte de extranjeros, 
                        es que podemos tener un estimado de muertos por el enfrentamiento de esa tarde del 2 de junio.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={hue3} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Ante la Respuesta Negativa de Parte de William Greene.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Los trabajadores organizaron y realizaron una manifestación, que inicio con 1500 personas. 
                        Con tres cartelones con el mensaje de cinco pesos, ocho horas, en el camino se unieron más a la manifestación, 
                        en buena vista fueron 500, en la concentradora 200 y en la fundición alrededor de 1000. Cerca de la demostración, 
                        Greene y 30 yanquis armados, vigilaban desde automóviles el desarrollo del movimiento obrero. 
                        La empresa imperialista se preparaba para la represión, los empleados de confianza y pistoleros organizados fueron dispuestos para la lucha anti obrera.
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
        img: img1s3,

    },
    {
        img: img2s3,

    },
    {
        img: img3s3,

    },
];