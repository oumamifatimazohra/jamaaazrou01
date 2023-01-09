import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import '../Styles/main.css';
import ImageFilter from 'react-image-filter';




function Slidetwo() {
  return (
    <Carousel controls={false} className=' Carouseltwo col-12 col-md-6  pave dark pave-front-actus'>
       
      <Carousel.Item controls={false} interval={1000}>
        
        <ImageFilter 
        className="d-block w-100"
        image="https://i.ibb.co/2KcRsKp/samajeste.jpg"
        />
        <Carousel.Caption controls={false}>
        
        
        
        <a  href='/discours'>
        <p className='discours'>
        Les progrès accomplis dans la mise en œuvre de la régionalisation avancée, pour importants qu’ils sont, resteront en-deçà du niveau requis, s’ils ne sont pas étayés par des mesures d’accompagnement permettant aux régions d’exercer efficacement leurs différentes attributions.
        </p>
        </a>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item controls={false} interval={500}>
        <ImageFilter
          className="d-block w-100"
          image="https://i.ibb.co/2KcRsKp/samajeste.jpg"
        />
        <Carousel.Caption controls={false} >
        
       <a  href='/discours'>
        <p className='discours'>
        L’application effective de la régionalisation avancée, de ses principes théoriques comme de ses modalités pratiques, reste tributaire de la mise en place d’une politique régionale clairement définie et réalisable en matière économique, sociale, culturelle et environnementale.
        </p>
        </a>
        
        </Carousel.Caption>
      </Carousel.Item>
     
    </Carousel>
  );
}

export default Slidetwo;