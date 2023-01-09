import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/main.css';
import ImageFilter from 'react-image-filter';


function Slider() {
  return (
    <Carousel controls={false} className=' Carousel col-12 col-md-6  pave dark pave-front-actus'>
       
      <Carousel.Item interval={1000}>
        
        <ImageFilter 
          className="d-block w-100"
          image="https://i.ibb.co/PcXZM76/Logo-VA.png"
          filter={ 'duotone' } // see docs beneath
        colorOne={ [40, 250, 250] }
        colorTwo={ [250, 150, 30] }
        
        />
        <Carousel.Caption className='caption'>
        
        <div>
        <a href='/now'>
        <h1>A la lune</h1>
        </a>
        
        <a href='/nowone'><h4>La Communication dans les communes est au cœur des actions de la Direction Générale des Collectivités Territoriales</h4></a>
        <p>
        La Direction Générale des Collectivités Territoriales a organisé une formation sur « La Communication dans la commune: Gestion du Site et Techniques de rédaction », du 20 au 22 décembre 2022, à l'Institut de Formation des Techniciens et des Technicie ...</p>
        </div>
        
          
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ImageFilter
          className="d-block w-100 "
          image="https://i.ibb.co/80ZrssQ/IMG-20221222-WA0018.jpg"
          filter={ 'duotone' } // see docs beneath
          colorOne={ [0, 0, 0] }
          colorTwo={ [40, 150, 200] }
        />
        <Carousel.Caption className='caption'>
        <div>
        <a href='/now'>
        <h1>A la lune</h1>
        </a>
        
        <a href='/nowtwo'><h4>Ouverture de l’appel à projets biennal 2023-2024 dans le cadre du 4ème dispositif conjoint triennal en soutien à la coopération décentralisée Franco-marocain 2022-2024</h4></a>
        <p>
        Le Ministère de l’Intérieur à travers la Direction Générale des Collectivités Territoriales et le Ministère Français de l’Europe et des Affaires Etrangères (MEAE, DAECT), lancent un nouvel appel à projets (AAP) dans le cadre du 4ème dispositif conjoi ...</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <ImageFilter
          className="d-block w-100"
          image="https://i.ibb.co/8rhpHGZ/DSC09533.jpg"
          filter={ 'duotone' } // see docs beneath
        colorOne={ [0, 0, 0] }
        colorTwo={ [40, 150, 200] }
        />
        <Carousel.Caption className='caption'>
        <div>
        <a href='/now'>
        <h1>A la lune</h1>
        </a>
        
        <a href='/nowtree'><h4>Une délégation sénégalaise en visite à la Direction Générale des Collectivités territoriales</h4></a>
        <p>
        Une délégation sénégalaise conduite par M. Abdou Khader NDIAYE, Directeur Général du Centre National de la Fonction Public Local et de la Formation, s'est rendue au siège de la Direction Générale des Collectivités Territoriales (DGCT), le 12 dé ...</p>
        </div>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;