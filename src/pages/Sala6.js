import React from 'react';
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import tecnologia from "../images/tecnologia.jpeg";
import tecno1 from "../images/tecno1.jpeg";
import tecno2 from "../images/tecno2.jpeg";
import tecno3 from "../images/tecno3.jpeg";
import img2s6 from '../images/gallery/sala6/figura2_sala6.jpeg';
import img3s6 from '../images/gallery/sala6/figura3_sala6.jpeg';
import img4s6 from '../images/gallery/sala6/figura4_sala6.jpeg';
import img5s6 from '../images/gallery/sala6/figura5_sala6.jpg';

export default function Sala6() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={tecnologia} />
                </HeaderContainer>
                <br />
                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Porfiriato y tecnología en Cananea.</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerContent>
                        <Typography variant="h4">Porfiriato y tecnología en Cananea.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        En 1897 México se encontraba bajo el régimen de Porfirio Díaz, una época de 
                        estabilidad política y económica, al mismo tiempo empezaba un avance importante 
                        a escala mundial con la revolución industrial, en Estados Unidos por su parte se 
                        ve la expansión del capitalismo hacia sus fronteras entre estas Arizona, y la mesilla 
                        que posteriormente cruzaran en busca de minerales como plata, uno de los principales 
                        personajes de esto era William C. Greene que buscaba minas y fortunas.
                        Por su parte, dentro de las políticas del gobierno porfirista, se encontraba 
                        hacer del norte un punto de interés para la migración y posterior explotación de 
                        sus recursos, el problema era que las personas estaban desperdigadas y muchas se 
                        encontraban en áreas de difícil acceso, por lo que esto coincidió con el expansionismo 
                        americano, donde se formó un espacio binario llamado la frontera de cristal.
                        Las compañías mineras desde 1880 habían explotado el sur de Arizona y sabían 
                        que estas minas se extendían al estado de sonora, así se formó la Cananea Consolidated 
                        Cooper Company (CCCC) por parte de William C. Greene en Cananea en 1897.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={tecno1} width={50} />
                    <BannerContent>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        De lo anterior se desprende la siguiente información, que para 1906, antes de 
                        la huelga en la mina llegaron a trabajar 7,560 empleados: 5,360 mexicanos y 2,200 
                        extranjeros. Así, el 71% de la fuerza laboral eran mexicanos, aunque llama la atención 
                        el alto 29% de extranjeros, que es el más alto en la década. lo que suma una población 
                        mayor a las 10,000 habitantes. De éstos, 3,800 fueron trabajadores regulares a lo largo 
                        del periodo, que no faltaron a sus labores. de los cuales 2,300 eran mexicanos y 1,500 
                        extranjeros.Esto refleja un reducción de la proporción de mexicanos, el 61%, y un incremento 
                        de la de extranjeros, el 39%. Casi el 40% de la fuerza laboral de la compañia eran extranjeros, 
                        proporción altisima que no volvera a tener la compañia minera en su historia. 
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={tecno2} width={50} />
                    <BannerContent>
                        <Typography variant="h4">Tecnología.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        El telégrafo eléctrico (Samuel Morse, 1833) puedeconsiderarse como la primera 
                        aplicación en el campo de las telecomunicaciones, pero la comprensión de lo que 
                        es la electricidad se logró hasta los años 1861-1865, con las ecuaciones del fenómeno 
                        electromagnético descrito por Maxwell(1861-1865).Por lo tanto, no fue la primera revolución 
                        industrial la que la incorpora a la produccion, sino es hasta el cuarto final del sigo XIX cuando 
                        se dan las aplicaciones en la economia de la electricidad que la convierten en una de las fuerzas 
                        motrices de la segunda revolucion industrial.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={tecno3} width={50} />
                    <BannerContent>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        La electrificación no solo fue un proceso técnico, sino un verdadero cambio social 
                        de implicaciones extraodinarias, comenzando por el alumbrado y siguiendo por diversos
                        tipos de procesos industriales (motor, electrico, metalurgia, refrigeración) y de 
                        comunicacíon (telefonía, radio). En la sociedad de consumo se dio una mayor utilización 
                        domestica de la electricidad en los electrodomesticos. 
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
        img: img2s6,

    },
    {
        img: img3s6,

    },
    {
        img: img4s6,

    },
    {
        img: img5s6,

    },
];

