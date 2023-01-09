import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/main.css';
import ImageFilter from 'react-image-filter';
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';



function Sliderone() {
  return (
    <Carousel controls={false} className=' Carouselone col-12 col-md-6  pave dark pave-front-actus'>
       
      <Carousel.Item interval={1000}>
        
        <ImageFilter 
        className="d-block w-100"
        image="https://i.ibb.co/G7F2GXF/Screenshot-2022-12-27-132720.png"
        />
        <Carousel.Caption className='caption'>
        
        
        <a href='/agenda'>
        <h1>Agenda</h1>
        </a>
        <a href='/agendaone'><h4>Rencontres de communication sur le programme des collectivités territoriales ouvertes</h4></a>
        <p>
        Du 30/11/2022 au 30/12/2022 <br />
        La Direction Générale des Collectivités Territoriales lance en collaboration avec les différentes wilaya des régions des rencontres de communication sur le Programme de Collectivités Territoriales ouvertes,  au niveau des douze régions ...</p>
        <button>Voir tout <PlayCircleFilledSharpIcon /></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ImageFilter
          className="d-block w-100"
          image="https://i.ibb.co/G7F2GXF/Screenshot-2022-12-27-132720.png"
        />
        <Carousel.Caption className='caption'>
        
        <a href='/agenda'>
        <h1>Agenda</h1>
        </a>
        
        <a href='/agendatwo'><h4>Lancement des rencontres de communication sur le programme des collectivités territoriales ouvertes</h4></a>
        <p>
        Du 30/11/2022 au 30/12/2022 <br />
        La Direction Générale des Collectivités Territoriales lance en collaboration avec les différentes wilaya des régions des rencontres de communication sur le Programme de Collectivités Territoriales ouvertes,  au niveau des douze régions ...</p>
        <button>Voir tout <PlayCircleFilledSharpIcon /></button>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageFilter
          className="d-block w-100"
          image="https://i.ibb.co/G7F2GXF/Screenshot-2022-12-27-132720.png"
        
        />
        <Carousel.Caption className='caption'>
        
        <a href='/agenda'>
        <h1>Agenda</h1>
        </a>
        
        <a href='/agendatree'><h4>Formation sur la communication dans la commune, gestion du site et écriture pour le web</h4></a>
        <p>
        Salé Du 20/12/2022 au 22/12/2022<br />
        La Direction Générale des Collectivités Territoriales organise une formation sur la communication dans la commune, gestion du site et écriture pour le web, du 20 au 22 décembre 2022 à l'Institut de Formation des Techniciens et Techniciens spécialisés ...</p>
        <button>Voir tout <PlayCircleFilledSharpIcon /></button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Sliderone;