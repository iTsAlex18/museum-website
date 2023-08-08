import React from 'react';
import Layout from '../components/Layout/Layout';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { HeaderContainer, HeaderImage } from "../components/Salas/Header1.js";
import { Typography, Box } from "@mui/material";
import { BannerContainer, BannerContent, BannerDescription, BannerImage } from "../components/Salas/Banners";
import can from "../images/can.jpeg";
import son from "../images/Sonora.jpeg";
import son2 from "../images/Sonora2.jpeg";
import son3 from "../images/Sonora3.jpeg";
import son4 from "../images/Sonora4.jpeg";
import son5 from "../images/Sonora5.jpeg";
import coco from "../images/cocospera2.jpg";
import bavi from "../images/Bavispe2.jpeg";
import bavi2 from "../images/Bavispe3.jpeg";
import bosque from "../images/bosque.jpeg";
import enci from "../images/Encinal.jpeg";
import sequi from "../images/Sequia.jpeg";
import bavi3 from "../images/Bavispe.jpeg";
import img1s1 from '../images/gallery/sala1/figura1_sala1.jpeg'
import img2s1 from '../images/gallery/sala1/figura2_sala1.jpeg'
import img3s1 from '../images/gallery/sala1/figura3_sala1.jpeg'

export default function Sala1() {
  return (

    <Layout>
      <HeaderContainer>
        <HeaderImage src={can} />
      </HeaderContainer>
      <br />
      
      <h2 style={{ textAlign: 'center', marginTop: '15px' }}>Primeros Habitantes</h2>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={son} width={50} />
        <BannerContent>
          <Typography variant="h4">Los Pueblos Ancestrales y el Contacto con los Españoles.</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          La antigüedad de las culturas del noroeste se remonta al Pleistoceno, hace quince mil años hacia 200 d.C se desarrollaron pequeñas aldeas agrícolas de casas-foso.
          En Sonora se han identificado cinco tradiciones arqueológicas: Trincheras al norte, Paquimé al oriente, Serrana al centro, la Costa Central y Huatabampo en el sur de Sonora
          y del norte de Sinaloa. La región de Cananea está ubicada en los límites entre Trincheras y Paquimé.</BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={son2} />
        <BannerContent>
          <Typography variant="h4">Primeras Expediciones (rutas y caminos)</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Los iniciales reconocimientos por parte de conquistadores españoles se registraron a partir de 1527, con la travesía de Álvar Núñez Cabeza de Vaca desde el norte. 
          Un lustro después una partida de españoles procedentes de Culiacán llegaron hasta Cumuripa y Cerro Prieto con el propósito de capturar esclavos, en 1539 fray Marcos de Niza 
          recorrió el territorio, al siguiente año Francisco Vázquez de Coronado, en su camino al río Gila, fundó un efímero pueblo en territorio ópata (Corazones). 
          En 1565 Francisco de Ibarra transitó, como lo habían hecho los conquistadores que le precedieron, los antiguos caminos indígenas.</BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={son3} />
        <BannerContent>
          <Typography variant="h4">Grupos de Contacto</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Las crónicas españolas y la arqueología consignan la existencia de una alta población ópata y registran que al momento de los primeros contactos vivían en aldeas, pueblos y rancherías, 
          habitando casas en la superficie (de adobe) y casas-foso: los asentamientos poblacionales guardaban cierta jerarquía y había centros regionales con mayor influencia. La situación encontrada 
          por los jesuitas fue diferente, esta nación (y en general las que poblaban lo que se llamó Provincia de Sonora) vivía en pequeñas rancherías dispersas debido a que su población había sido diezmada por las epidemias. 
          Se estima que a fines del siglo XVII había una población de 20,000 ópatas.</BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={son4} />
        <BannerContent>
          <Typography variant="h4">Inicio de la Evangelización</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Con la evangelización jesuita en la opateria se empezó a definir la frontera norte de Sonora, para 1670 los padres de la Compañía de Jesús estaban bien asentados entre ópatas y pimas bajos, 
          pero no habían tenido éxito con pimas altos y seris. El panorama cambió con la llegada del padre Eusebio Francisco Kino en 1687, quien fundó las misiones de la pimeria alta, iniciando en 1687 con Nuestra Señora de los Dolores (al norte de Cucurpe, el pueblo ópata más septentrional en la vega del río San Miguel): 
          fundo también Santa María Suamca, Los Santos Ángeles de Guevavi y Santiago de Cocóspera, pronto abandonadas debido a los asaltos apaches.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={son5} />
        <BannerContent>
          <Typography variant="h4">La Etapa Colonial, Pueblos de Misión</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          El propósito de las misiones jesuitas fue convertir los indígenas al cristianismo y transformarlos en súbditos del rey de España. La misión y el presidio, instituciones complementarias, 
          sostuvieron e hicieron posible el asentamiento y dominio de los colonos civiles (conquista secular). En los pueblos de misión, los ópatas, como otras naciones indígenas de Sonora, 
          transformaron su organización social, política y militar, incorporaron nuevas formas productivas, modificaron su dieta y dieron nuevos sentidos a sus imaginarios sociales debido a la influencia de las creencias religiosas cristianas, 
          que combinaron con sus costumbres ancestrales originando nuevos ritos y ceremonias.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={coco} />
        <BannerContent>
          <Typography variant="h4">Presidios y Frontera</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Los presidios fueron establecidos para afianzar la frontera ganada por los conquistadores españoles hasta el siglo XVII. Tuvieron como objetivo guardar el orden entre los indios sujetos a pueblos de misión, 
          que expresaban sus inconformidades mediante frecuentes levantamientos armados, en ocasiones aliados a indígena no reducidos al sistema misional, como los seris. Asimismo, los presidios tuvieron como responsabilidad principal guarecer la frontera de las incursiones apaches, 
          presentes desde 1680.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerContent>
          <Typography variant="h4">Crisis del Sistema Misional, Reformas Borbónicas</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Las Reformas Borbónicas impulsadas por la corona española en la segunda mitad del siglo XVIII se acompañaron de trascendentes cambios en el orden político y económico, entre ellos la expulsión de los jesuitas en 1767 y su relevo por franciscanos, 
          numerosos pueblos de la opatería fueron “secularizados”, es decir, convertidos en parroquias o doctrinas: la población indígena decreció y aumentó la constituida por colonos civiles (españoles, criollos y “castas” o “gente de razón”) 
          a los que paulatinamente se transfirió la tierra.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={bavi} />
        <BannerContent>
          <Typography variant="h4">Islas del Cielo</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Las montañas de esta región se conocen como “Islas del Cielo”. Separadas unas de otras por un mar de pasto, 
          lejos del macizo principal de la Sierra Madre Occidental, que hace apenas 30 millones de años dejo los grandes bloques de roca que forman las cimas y 
          han ido llenando los valles con sus desprendimientos de grava y arena.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={bavi2} />
        <BannerContent>
          <Typography variant="h4">Pastizal</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          En el mar de pasto que rodea las montañas de la región se observan especies anuales, que brotan cada año, y especies perennes que viven varios años soportando las largas temporadas sin lluvia y heladas invernales. 
          A las especies nativas se encuentran los quelites (Amaranthus), el garbancillo (critalaria plumila), y varias especies de zacates conocidos como navajitas (género Bouteloua), 
          el zacate galleta (Hilaria belangeri) muy apreciado por el ganado que pasta en la zona.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={bosque} />
        <BannerContent>
          <Typography variant="h4">Bosques de Galería</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Es en los pastizales donde surge uno de los fenómenos más llamativos de la ecología del desierto: Los bosques de galería, que con el follaje de los álamos (Populus fremontii), 
          sauces (Salix gooddingii y Salix bonplandiana) y en las zonas más áridas o impactadas, incluso con los mezquites (Prosopis velutina) 
          que gana territorio gracias a un sistema de raíces más profundas y mayor resistencia a la sequía.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={enci} />
        <BannerContent>
          <Typography variant="h4">Encinal</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          En los lomeríos a partir de los 1,300 msnm dominan los encinos (género Quercus) y llegan a convivir con los pinos en la parte media de las montañas. 
          Las especies más comunes en la zona son el encino blanco (Q, arizonical), encino bellotero (Q, emoryi) bellota de cochi (Q, oblongifolia) y 
          conviven con árboles más comunes en los matorrales como él, táscate (juniperus coahuilensis) y el mezquite (Prosopis velutina), que logran reproducirse más fácilmente, 
          ya que el ganado consume los brotes jóvenes de los encinos.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerContent>
          <Typography variant="h4">Pinar</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          Encaramados en los riscos y mezclados con los encinos a la orilla de la carretera que lleva Cananea se ven los pinos (género Pinus) de diversas especies, Piñonero (P, discolor), 
          chimonque (P, leiophila), pino real (P, engelmanii) y pino blanco (P, arizonica). Muy apreciados por la calidad de su madera, la extracción forestal de pinos ha cambiado su distribución y 
          la proporción con los encinos en los estratos donde conviven.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={sequi} />
        <BannerContent>
          <Typography variant="h4">La Sequía y Los Troncos Secos</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          La sequía forma parte de los grandes ciclos climáticos de esta región y las especies se adaptan refugiándose en las cimas donde la lluvia es más abundante y 
          regresando cuando las condiciones son más favorables. Cuando los árboles mueren, sus troncos son aprovechados por hongos e insectos que reintegran lentamente los nutrientes al suelo y 
          varias aves los buscan como refugio.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerContent>
          <Typography variant="h4">Los Incendios</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          En zonas más altas los incendios regulan la convivencia de pinos y encinos, 
          que ganan espacio temporalmente al poder surgir más rápido cuando finalmente llegan las lluvias y brotan las semillas y las raíces. 
          Los esfuerzos de reforestación apresurada después de los incendios, a veces con especies exóticas, ponen en riesgo los equilibrios construidos por la naturaleza a través de millones de años.
          </BannerDescription>
        </BannerContent>
      </BannerContainer>

      <BannerContainer style={{ marginTop: '15px', borderRadius: '15px' }}>
        <BannerImage src={bavi3} />
        <BannerContent>
          <Typography variant="h4">Islas Únicas</Typography>
          <BannerDescription variant="h6" style={{ marginTop: '10px' }}>
          En esta zona se han identificado 1,234 especies de plantas, 208 especies de aves y 156 especies de mariposas. Esta gran diversidad de invertebrados y relaciones de plantas y animales que han evolucionado juntos al punto de ser comunidades únicas como los colibríes y 
          los agaves se explica por la extraordinaria situación de estas montañas en el límite de dos reinos florísticos y dos reinos faunísticos a través de tres zonas climáticas(tropical, subtropical y templado).
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
  );
}

const itemData = [
  {
    img: img3s1,

  },
  {
    img: img1s1,

  },
  {
    img: img2s1,

  },
];