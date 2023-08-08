import React from 'react'
import Layout from '../components/Layout/Layout'
import Divider from '@mui/material/Divider';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import museo from "../images/museo.jpeg";
import museo1 from "../images/museo.jpg";
import Carcel from "../images/Carcel.jpg";
import corrido from "../images/corrido.jpg";

const Sala8 = () => {
    return (
        <>
            <Layout>
                <HeaderContainer>
                    <HeaderImage src={museo} />
                </HeaderContainer>
                <br />
                <h2 style={{ textAlign: 'center', marginTop: '15px' }}>La Antigua Cárcel de Cananea.</h2>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={Carcel} width={50} />
                    <BannerContent>
                        <Typography variant="h4">La Cárcel de Cananea.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        En realidad, Izabal, que tenía más visión que Elías, reconocía que, debido al crecimiento de la población del mineral, se hacía urgente tener control sobre la gente que arribaba a Cananea, 
                        pues era notorio que se hacían más frecuentes los delitos y las faltas el reglamento policiaco y la cárcel existente, además de ser muy pequeña (5 metros cuadrados), no contaba con las especificaciones arquitectónicas de una prisión, 
                        pues frecuentemente había fuga de reos. De esta manera, si iniciaron los trabajos para la construcción del edificio de la cárcel de Cananea y las recomendaciones que se hicieron para su construcción fueron que los materiales de construcción(piedras, ladrillo, hierro, madera, cal, arena y cemento) 
                        debían de ser de la mejor calidad y que todos los albañiles y trabajadores fueran expertos en sus oficios.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={museo1} width={50} />
                    <BannerContent>
                        <Typography variant="h4">De Cárcel a Museo.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Seguridad, tenía fugas constantes, motines de presos y otras calamidades: fue así que consignado por escrito el Dr. Filiberto Barroso, primer regidor, declaró: “hay una población de 68 personas en un área de cinco metros cuadrados…”
                        En el año de 1979 la famosa Cárcel de Cananea concluye su historia como centro de readaptación social; para ofrecer, a partir de 1980, historia, arte y cultura, convirtiéndose así en Museo de la Lucha Obrera.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerContent>
                        <Typography variant="h4">La Cárcel de Cananea corrido original.</Typography>
                        <Typography variant="h6" textAlign="center" style={{ marginTop: '10px' }}>Voy a dar un por menor</Typography>
                        <Typography variant="h6" textAlign="center">De lo que a mí me ha pasado</Typography>
                        <Typography variant="h6" textAlign="center">Que me hayan tomado preso</Typography>
                        <Typography variant="h6" textAlign="center">Siendo un gallo tan jugado.</Typography>
                        
                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Me fui para el agua prieta</Typography>
                        <Typography variant="h6" textAlign="center">Ha ver si me conocían</Typography>
                        <Typography variant="h6" textAlign="center">A las once de la noche</Typography>
                        <Typography variant="h6" textAlign="center">Me aprendio la policía.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Me aprendieron los gendarmes</Typography>
                        <Typography variant="h6" textAlign="center">Al estilo americano y</Typography>
                        <Typography variant="h6" textAlign="center">Como era hombre de delito</Typography>
                        <Typography variant="h6" textAlign="center">Todos con pistola en mano.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Me llevan a Cananea</Typography>
                        <Typography variant="h6" textAlign="center">Atravesando a la sierra</Typography>
                        <Typography variant="h6" textAlign="center">No me les pude escapar</Typography>
                        <Typography variant="h6" textAlign="center">Por no conocer la tierra.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Al llegar a Cananea</Typography>
                        <Typography variant="h6" textAlign="center">Allí perdí la esperanza</Typography>
                        <Typography variant="h6" textAlign="center">Porque luego fui entregado</Typography>
                        <Typography variant="h6" textAlign="center">Al juez de primera instancia.</Typography>


                        <Typography variant="h6" textAlign="center" style={{ marginTop: '10px' }}>Me trajeron esposado</Typography>
                        <Typography variant="h6" textAlign="center">Me entregaron a la ley</Typography>
                        <Typography variant="h6" textAlign="center">Porque iba ser entregado</Typography>
                        <Typography variant="h6" textAlign="center">Al señor don José rey.</Typography>
                        
                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Me pusieron procesado</Typography>
                        <Typography variant="h6" textAlign="center">En un frío calabozo</Typography>
                        <Typography variant="h6" textAlign="center">Me pusieron guardias dobles</Typography>
                        <Typography variant="h6" textAlign="center">Soldados de dos en dos.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>A las diez de la mañana</Typography>
                        <Typography variant="h6" textAlign="center">Me lavaba la cabeza</Typography>
                        <Typography variant="h6" textAlign="center">Porque iba ser presentado</Typography>
                        <Typography variant="h6" textAlign="center">Al señor Don Fidencio Meza.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Me sacaron un escrito</Typography>
                        <Typography variant="h6" textAlign="center">De la casa del congreso</Typography>
                        <Typography variant="h6" textAlign="center">Donde me pregunta al juez</Typography>
                        <Typography variant="h6" textAlign="center">Sabe usted porque está preso.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Luego yo le contesté</Typography>
                        <Typography variant="h6" textAlign="center">Si no sabe yo si sé</Typography>
                        <Typography variant="h6" textAlign="center">Si señor aquí estoy preso</Typography>
                        <Typography variant="h6" textAlign="center">Por unos tres que mate.</Typography>


                        <Typography variant="h6" textAlign="center" style={{ marginTop: '10px' }}>Me siguieron preguntando</Typography>
                        <Typography variant="h6" textAlign="center">Y contesté muy formal</Typography>
                        <Typography variant="h6" textAlign="center">No me han de formar un templo</Typography>
                        <Typography variant="h6" textAlign="center">Ni un palacio de cristal.</Typography>
                        
                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>De tres amigos que tengo</Typography>
                        <Typography variant="h6" textAlign="center">Ninguno me quiso hablar</Typography>
                        <Typography variant="h6" textAlign="center">Comenzando con el chango</Typography>
                        <Typography variant="h6" textAlign="center">El osito y el caimán.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>La cárcel de Cananea</Typography>
                        <Typography variant="h6" textAlign="center">Está situada en una mesa</Typography>
                        <Typography variant="h6" textAlign="center">Donde yo fui procesado</Typography>
                        <Typography variant="h6" textAlign="center">Por causa de mi torpeza.</Typography>

                        <Typography variant="h6" textAlign="center" style={{ marginTop: '20px' }}>Despedida no les doy</Typography>
                        <Typography variant="h6" textAlign="center">Porque no la traigo aquí</Typography>
                        <Typography variant="h6" textAlign="center">Sé la deje al santo niño</Typography>
                        <Typography variant="h6" textAlign="center">Y al señor de Mapimí</Typography>
                        <Typography variant="h6" textAlign="center">Sé las deje a mis amigos</Typography>
                        <Typography variant="h6" textAlign="center">Paque se acuerden de mí.</Typography>
                        <Typography variant="h6" textAlign="end">(autor anonimo...)</Typography>

                        
                    </BannerContent>
                </BannerContainer>

                <br />
            </Layout>
        </>
    )
}

export default Sala8