import React from 'react';
import Slider from '../Components/Slider';
import Sliderone from '../Components/Sliderone';
import Banner from '../Components/Banner';
import Bannerone from '../Components/Bannerone';
import '../Styles/main.css';
import Sectionsecond from './Sectionsecond';
import Sectiontree from './Sectiontree'

function Herosection() {
  return (
    <div className='Sectionhero'>
			 <div className='Section'>
			  <Banner />
			  <Slider />
			  
			 </div>
			 <div className='Section'>
			 <Bannerone />
			 <Sliderone />
			 </div>
			 <Sectionsecond/>
			 <Sectiontree />
			</div>

  )
}

export default Herosection
