import React from 'react'
import Layout from '../components/Layout/Layout'
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
                        <Typography variant="h4">La Carcel de Cananea.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        En realidad, Izabal, que tenía más visión que Elías, reconocía que, debido al 
                        crecimiento de la población del mineral, se hacía urgente tener control sobre la 
                        gente que arribaba a Cananea pues era notorio que se hacían más frecuentes los delitos 
                        y las faltas el reglamento policiaco y la cárcel existente, además de ser muy pequeña 
                        (5 metros cuadrados), no contaba con las especificaciones arquitectónicas de una prisión pues 
                        frecuentemente había fuga de reos. 
                        De esta manera si iniciaron los trabajos para la construcción del edificio de la cárcel de Cananea 
                        y las recomendaciones que se hicieron para su construcción fueron que los materiales de construcción 
                        (piedras, ladrillo, hierro, madera, cal, arena y cemento) debían de ser de la mejor calidad y que 
                        todos los albañiles y trabajadores fueran expertos en sus oficios.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={museo1} width={50} />
                    <BannerContent>
                        <Typography variant="h4">De cárcel a Museo.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        seguridad, tenía fugas constantes, motines de presos y otras calamidades: fue así que consignado 
                        por escrito el Dr. Filiberto Barroso, primer regidor, declaró: "hay una población de 68 personas 
                        en un área de cinco metros cuadrados..."
                        En el año de 1979 la famosa Cárcel de Cananea concluye su historia como centro de readaptación 
                        social; para ofrecer a partir de 1980, historia, arte y cultura, convirtiéndose así 
                        en Museo de la Lucha Obrera.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
                    <BannerImage src={corrido} width={50} />
                    <BannerContent>
                        <Typography variant="h4">La Cárcel de Cananea corrido original.</Typography>
                        <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
                        Voy a dar un por menor de lo que a mí me ha pasado que me hayan tomado preso siendo un gallo tan jugado.
                        Me fui para el Agua Prieta a ver si me conocían a las once de la noche me aprendió la policía.
                        Me aprendieron los gendarmes al estilo americano y como era hombre de delito todos con pistola en mano.
                        Me llevan a Cananea atravesando a la sierra no me les pude escapar por no conocer la tierra.
                        Al llegar a Cananea allí perdí la esperanza porque luego fui entregado al juez de primera instancia.
                        Me trajeron esposado me entregaron a la ley porque iba ser entregado al señor don José rey. 
                        Me pusieron procesado en un frio calabozo me pusieron guardias dobles soldados de dos en dos.
                        A las diez de la mañana me lavaba la cabeza porque iba ser presentado al señor don Fidencio meza.
                        Me sacaron un escrito de la casa del congreso donde me pregunta al juez sabe usted porque está preso.
                        Luego yo le Contesté si no sabe yo si se si señor aquí estoy preso por unos tres que mate. 
                        Me siguieron preguntando y Contesté muy formal no me han de formar un templo ni un palacio de cristal.
                        De tres amigos que tengo ninguno me quiso hablar comenzando con el chango el osito y el caimán. 
                        La cárcel de cananea está situada en una mesa donde yo fui procesado por causa de mi torpeza.
                        Despedida no les doy porque no la traigo aquí se la deje al santo niño y al señor de Mapimí se las deje a mis amigos paque se recuerden de mí.
                        </BannerDescription>
                    </BannerContent>
                </BannerContainer>

                <br />
            </Layout>
        </>
    )
}

export default Sala8