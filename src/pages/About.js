import React from "react";
import Layout from "./../components/Layout/Layout";
import { Box, Typography } from "@mui/material";
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import sa1Image from '../images/gallery/sala1/figura1_sala1.jpeg'
import sa2Image from '../images/gallery/sala2/escalones.jpeg'
import sa3Image from '../images/gallery/sala3/figura1_sala3.jpeg'
import sa4Image from '../images/gallery/sala4/figura2_sala4.jpeg'
import sa5Image from '../images/gallery/sala5/figura2_sala5.jpeg'
import sa6Image from '../images/gallery/sala6/figura4_sala6.jpeg'
import sa7Image from '../images/gallery/sala7/figura1_sala7.jpeg'
import sa8Image from '../images/gallery/sala9/figura1_sala9.jpeg'
import sa9Image from '../images/gallery/sala10/figura2_sala10.jpeg'

export default function MasonryImageList() {
  return (
    <>
      <Layout>
        <Box
          sx={{
            my: 15,
            textAlign: "center",
            p: 2,
            "& h4": {
              fontWeight: "bold",
              my: 2,
              fontSize: "2rem",
            },
            "& p": {
              textAlign: "justify",
            },
            "@media (max-width:600px)": {
              mt: 0,
              "& h4 ": {
                fontSize: "1.5rem",
              },
            },
          }}
        >
          <Typography variant="h4">Inicios del Museo de la Lucha Obrera</Typography>
          <p>
            El Museo de la Lucha Obrera (antigua Cárcel de Cananea), se encuentra ubicado en Sonora,
            México. Alberga la historia del movimiento obrero de 1906, por el cual la Heroica Ciudad
            de Cananea es considerada cuna de la Revolución mexicana.
            El edificio que aloja al museo fue originalmente la cárcel de Cananea de 1903 a 1979. En
            1980 abre sus puertas como Museo. En 1981 es declarado Monumento Histórico Nacional por
            el INAH y el 19 de noviembre de 1980 es inaugurado.
            Durante los periodos de vacaciones, el museo recibe hasta 700 visitantes por mes.
          </p>
          <br />
        </Box>
      
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
  );
};

const itemData = [
  {
    img: sa1Image,

  },
  {
    img: sa2Image,

  },
  {
    img: sa3Image,

  },
  {
    img: sa4Image,

  },
  {
    img: sa5Image,

  },
  {
    img: sa6Image,

  },
  {
    img: sa7Image,

  },
  {
    img: sa8Image,

  },
  {
    img: sa9Image,

  },
];
