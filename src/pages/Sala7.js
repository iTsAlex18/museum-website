import React from 'react'
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import patio from "../images/patio.jpeg";
import pres1 from "../images/pres1.jpeg";
import pres2 from "../images/pres2.jpeg";
import pres3 from "../images/pres3.jpeg";
import pres4 from "../images/pres4.jpeg";
import pres5 from "../images/pres5.jpeg";
import pres6 from "../images/pres6.jpeg";
import pres7 from "../images/pres7.jpeg";
import img1s7 from '../images/gallery/sala7/figura1_sala7.jpeg';
import img2s7 from '../images/gallery/sala7/figura2_sala7.jpeg';
import img3s7 from '../images/gallery/sala7/figura3_sala7.jpeg';
import img4s7 from '../images/gallery/sala7/figura4_sala7.jpeg';
import img5s7 from '../images/gallery/sala7/figura5_sala7.jpeg';
import img6s7 from '../images/gallery/sala7/figura6_sala7.jpeg';

export default function Sala7() {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={patio} />
                </HeaderContainer>
                <br />
                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>El Legendario Patio de la Cárcel y Presos de La Antigua Cárcel de Cananea.</h2>


                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres1} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 113.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                            CATALINA GUILLEN, hija de Ignacio Guillen y Lázara López, natural de Tepic,
                            territorio del mismo nombre de 30 años de edad, soltera de ocupación doméstica.
                            Estatura 1 metro 50 centímetros. Complexión delgada.
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente chica
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas negras
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos cafés
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz regular
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote nada
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca regular
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios regulares
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba redonda
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: una cicatriz en el lado derecho de la barba Fue declarada 
                                                                    bien presa en 28 de febrero de 1910, por el delito de lesiones a Faustina de la 
                                                                    Rosa, y está a disposición del juez local. En 9 de marzo de 1910 fue sentenciada 
                                                                    a 20 días de prisión que cumplirá el 19 del mismo mes.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres2} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 114.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        MAGDALENO GONZALES, hijo de Juan Gonzales y de Purificación García, natural de Rosario, 
                        Sinaloa, de 26 años de edad, soltero, panadero y de esta vecindad. No sabe leer ni escribir. 
                        Estatura 1 metro con 57 centímetros, complexión regular.
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente regular 
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas al pelo 
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos oscuros 
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz regular
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote poco 
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca grande 
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios regulares 
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba poca
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: una cicatriz en la frente. Fue declarado bien preso en 12 de marzo de 1910 
                                                                    procedente de Chivatera por homicidio del niño Isidro Padilla de 8 años de edad y está a disposición 
                                                                    del juez 2° de 1.ª. Instancia. En 12 de abril de 1910 fue sentenciado a doce años de obras públicas, 
                                                                    En 19 de marzo de 1911 quedó en libertad por haber cumplido su condena. 
                                                                    Fue puesto en libertad en la noche del 13 al 14 de julio de 1911, por un grupo de tropa sublevada. 
                                                                    El 13 de abril de 1912 fue reprendido. 
                                                                    En 5 de mayo de 1912 fue remitido a la Penitenciaria de Hermosillo, por disposición de la prefectura.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres3} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 117.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        ROSA MORALES, hija de Catarino Morales y María García, natural de la Colorada, Sonora, de 19 años de edad, 
                        soltera y vecina de Nogales. Estatura 1 metro 65 centímetros. Complexión delgada. 
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente chica  
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas negras  
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos oscuros 
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz chica 
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote nada  
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca chica  
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios delgados  
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba redonda
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: hoyosa de viruela y una pequeña cicatriz en la barba. Fue declarada bien presa en 19 de marzo de 1910 
                                                                    por el delito de robo de ropa a la casa de Harman jirry y está a disposición del juez 2° de 1.ª. Instancia. 
                                                                    En 18 de junio de 1910 fue sentenciada a 3 años 6 meses de prisión, de cuya sentencia apelo. 
                                                                    En 19 de diciembre de 1910 el supremo tribunal del Estado reformo la penitencia de la 1.ª. Instancia, imponiéndole un 
                                                                    año de prisión que cumplirá en 19 de marzo de 1911. Cumplió el tiempo de su condena.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres4} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 118.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        VICENTE M. CASANOVA, hijo de Carlos Casanova y de Antonia Sozada natural de Guaymas, 
                        Sonora, de 22 años de edad y de oficio carrero, sabe leer y escribir y hablar algo de inglés. 
                        Estatura 1 metro 62 centímetros. Complexión regular. 
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro  
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente grande  
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas al pelo   
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos cafés  
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz regular  
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote poco   
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca grande   
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios regulares   
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba poblada
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: una cicatriz sobre la ceja derecha. Fue declarado bien preso 
                                                                    en 23 de marzo de 1910 por el delito de robo de pólvora a las CCCC y está a disposición 
                                                                    del juez 2° de 1.ª. Instancia En 27 de septiembre de 1910 quedó en libertad por haber otorgado 
                                                                    fianza Cumplió el tiempo de su condena.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres5} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 122.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        MARÍA GUADALUPE GASTELUM, hija de José Gastelum Elvira Ramírez, natural de magdalena, Son de 25 años de edad, 
                        soltera y de esta vecindad. Sabe leer y escribir Estatura 1 metro, 55 centímetros, 
                        complexión regular. 
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro  
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente grande  
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas negras   
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos negros  
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz regular  
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote nada   
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca chica    
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios delgados    
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba redonda
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: tiene la cara manchada de pecas. Fue declarada bien presa en 21 de abril de 1910, 
                                                                    por el delito de lesiones a Salvador G. Robles, y está a disposición del juez 2° de 1.ª. Instancia En 2 de mayo de 1910 
                                                                    quedó en libertad por haber pagado multa de veinte pesos.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres6} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 141.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        JAMES E. MC. KENNA, hijo de Patrick y de Margarita Mc. Kenna; de veintinueve años de edad, 
                        soltero, originario de Canadá, minero y vecino de Chivatera. Sabe leer y escribir en inglés 
                        y habla poco el español Estatura 1 metro 80 centímetros. Complexión regular. 
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color blanco 
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo rubio   
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente grande  
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas al pelo    
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos azules   
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz aguileña   
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote regular    
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca grande     
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios regulares     
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba poblada
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: usa la barba y el bigote rasurados. Fue declarado bien preso en 13 de julio de 1910 
                                                                    acusado de lesiones y ultrajar a un agente de la autoridad y está a disposición del juez 2° de 1.ª. 
                                                                    Instancia. En 19 de julio de 1910 quedó en libertad bajo fianza de mil pesos.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={pres7} width={50} />
                    <BannerContent>
                        <Typography variant="h4">PÁGINA 168.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        PRIMITIVO GALARZA, hijo de Juan Galarza y de Lina Valdez, natural de la Villa de Purificación del Estado de Jalisco; 
                        de 31 años de edad, soltero, y de oficio jornalero. Vecino de Cananea, sabe leer y escribir. 
                        Estatura 1 metro 65 centímetros. Complexión regular. 
                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                •	Color trigueño 
                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                    •	Pelo negro    
                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                        •	Frente grande  
                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                            •	Cejas al pelo    
                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                •	Ojos cafés    
                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                    •	Nariz regular    
                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                        •	Bigote regular     
                                                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                            •	Boca regular      
                                                            <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                •	Labios regulares     
                                                                <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    •	Barba escasa
                                                                    <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                                                                    Señas particulares: hoyoso de viruelas, tiene trozado el dedo índice de la mano derecha en la primera 
                                                                    falange, y fracturado el índice de la mano izquierda.
                                                                    Fue declarado bien preso en siete de noviembre de 1910, 
                                                                    procedente de Chivatera, acusado de robo de un fonógrafo por Fermín Peraza 
                                                                    y está a disposición del juez 2° de 1.ª. Instancia. En 19 de diciembre de 1910 quedó en absoluta libertad por sentencia 
                                                                    dictada en la Cananea.
                                                                    </BannerDescription>
                                                                </BannerDescription>
                                                            </BannerDescription>
                                                        </BannerDescription>
                                                    </BannerDescription>
                                                </BannerDescription>
                                            </BannerDescription>
                                        </BannerDescription>
                                    </BannerDescription>
                                </BannerDescription>
                            </BannerDescription>
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
        img: img1s7,

    },
    {
        img: img2s7,

    },
    {
        img: img3s7,

    },
    {
        img: img4s7,

    },
    {
        img: img5s7,

    },
    {
        img: img6s7,

    },
];

