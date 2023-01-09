import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/main.css';
import ImageFilter from 'react-image-filter';




function Slidetree() {
  return (
    <Carousel controls={false} className=' Carouseltwo col-12 col-md-6  pave dark pave-front-actus'>
       
      <Carousel.Item interval={1000}>
        
        <ImageFilter 
        className="d-block w-100"
        image="https://i.ibb.co/W5FwSTq/image-BO-71-02.png" 
        />
        <Carousel.Caption >
        
        
        
        <a  href='/juridique'>
        <p className='juridique'>
        Publication au Bulletin Officiel du décret relatif au constat de décès, à l’inhumation des corps, leur transport et exhumation
Bulletin Officiel n° 7102 en date du 23 Juin 2022
        </p>
        </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <ImageFilter
          className="d-block w-100"
          image="https://i.ibb.co/W5FwSTq/image-BO-71-02.png"
        />
        <Carousel.Caption >
        
       <a  href='/juridique'>
        <p className='juridique'>
        Publication au Bulletin Officiel de deux décrets fixant les modalités de certification conforme des copies des documents et l’attestation de l’authenticité de la signature
        </p>
        </a>
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Slidetree;