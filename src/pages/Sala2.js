import React from 'react'
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import mina from "../images/mina.jpeg";
import mil from "../images/1906.jpeg";
import mineros from "../images/mineros.jpeg";
import mc from "../images/mc.jpeg";
import ferro from "../images/ferrocarril.jpeg";
import parti from "../images/participacion.jpeg";
import img1s2 from '../images/gallery/sala2/escalones.jpeg'
import img2s2 from '../images/gallery/sala2/figura1_sala2.jpeg'
import img3s2 from '../images/gallery/sala2/figura2_sala2.jpeg'
import img4s2 from '../images/gallery/sala2/figura3_sala2.jpeg'
import img5s2 from '../images/gallery/sala2/figura4_sala2.jpeg'

export default function Sala2() {
  return (

    <>
      <Layout>
        <HeaderContainer>
          <HeaderImage src={mina} />
        </HeaderContainer>
        <br />

        <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Minería</h2>

        <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <BannerImage src={mineros} width={50} />
          <BannerContent>
            <Typography variant="h4">De Los Alambres que Comunican la Corriente a los Trenes Electricos, a Cada Instante se Escapan Estrellas Efimeras, pero Intensa Luz, sus Azules y Hermosos Resplandores.</Typography>
            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
            Después las máquinas de vapor y las eléctricas. (Carbón, leña y aceite) La introducción del diesel hizo más eficiente las máquinas de ferrocarril.
            </BannerDescription>
          </BannerContent>
        </BannerContainer>

        <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <BannerImage src={mil} width={50} />
          <BannerContent>
            <Typography variant="h4">1906.</Typography>
            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
            Los nacionales percibían tres pesos diarios y los “gringos” siete, pagados en dólares. Las relaciones laborales eran negativas y discriminatorias, los mineros mexicanos laboraban prolongadas jornadas de trabajo y bajo condiciones insalubres, 
            sufrían abusos en las tiendas de raya, ocupaban la mayoría de los puestos eventuales y recibían malos tratos de mayordomos y capataces, al mismo tiempo que los empleos de confianza y los mejores puestos los ocupaban Extranjeros. 
            Tales condiciones, así como la alta concentración obrera y el trabajo político de Los cuadros del magonismo, facilitaron la organización de los obreros y empleados.
            </BannerDescription>
          </BannerContent>
        </BannerContainer>

        <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <BannerImage src={mc} width={50} />
          <BannerContent>
            <Typography variant="h4">La Minería de Cananea.</Typography>
            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
            La extracción de mineral ha sido de socavón y de mineral atajo abierto, o combinada, dependiendo de la tecnología y de la ley del mineral, 
            de la misma manera que la fundición. La compañía minera de Cananea contaba, además de las minas y la fundición para el beneficio, con dos plantas concentradoras, planta de fuerza motriz y talleres de mantenimiento. 
            Las concentradoras eran instalaciones de grandes dimensiones donde se va reduciendo la piedra mineral y por último el beneficio, dependiendo de las características del mineral y de las técnicas de beneficio, en el caso de Cananea se usó la fundición.
            </BannerDescription>
          </BannerContent>
        </BannerContainer>

        <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <BannerImage src={ferro} width={50} />
          <BannerContent>
            <Typography variant="h4">Ferrocarril.</Typography>
            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
            Un elemento de la Revolución Industrial, que llegó tardíamente a Cananea, pero que representa al final de cuentas una de las innovaciones tecnológicas más importante para la minería de Cananea, Fue: 
            el ferrocarril. El cual, tendrá diferentes tipos dependiendo de la función asignada en la compañía. Los rieles, que salían de las minas y que servían para transportar el mineral hasta la Concentradora, 
            serán complementados por trenes de vía angosta, algunos de los cuales eran eléctricos, que recorrían el interior de la población entre las diferentes instalaciones de la compañía fueran las minas, las concentradoras y la fundación.
            </BannerDescription>
          </BannerContent>
        </BannerContainer>

        <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
          <BannerImage src={parti} width={50} />
          <BannerContent>
            <Typography variant="h4">La Participacion.</Typography>
            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
            La electricidad fue una de las actividades que significo un avance tecnológico dentro de la población y en la minería, y que atento el surgimiento de esta población. 
            El tener el servicio eléctrico para el resto de la población permitió que las casas, tuvieran de parte de la compañía el servicio de gas y luz, que hacían más accesibles la vida en la población.
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
    img: img2s2,

  },
  {
    img: img3s2,

  },
  {
    img: img1s2,

  },
  {
    img: img4s2,

  },
  {
    img: img5s2,

  },
];