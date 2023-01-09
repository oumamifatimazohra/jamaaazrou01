import React from 'react';
import '../Styles/main.css';
import PlayCircleFilledSharpIcon from '@mui/icons-material/PlayCircleFilledSharp';

function Banner() {
  return (
    <div className=' Banner col-12 col-md-6   '>
    
   
  <a  href='/news'>
    <h2 className='title'>Lancement du Troisième Appel à Projets Relatif au FACDI du 09 Mai au 09 Août 2022</h2>
  </a>
  <br/><br/><br/><br/>

  <button>Lire plus <PlayCircleFilledSharpIcon /></button>
   
   
    </div>
  )
}

export default Banner

