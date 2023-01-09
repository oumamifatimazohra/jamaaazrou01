import React from 'react';
import Slidetwo from '../Components/Slidetwo';
import Slidetree from '../Components/Slidetree';
import '../Styles/main.css';


function Sectiontree() {
  return (
    <div className='Stree'>
      <div className='Streedis'><a  href=''><h2>Discours et messages Royaux</h2></a>
      <br/><Slidetwo/></div>
      <div className='Streejur'><a href=''><h2>Actualités juridiques</h2></a>
      <br/><Slidetree/></div>

    </div>
  )
}

export default Sectiontree
