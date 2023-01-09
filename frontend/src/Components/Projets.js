import React from 'react';
import './Dropdow.css';
import { useTranslation } from 'react-i18next';

function Projets() {
  const [ t, i18n ] = useTranslation();
  return (
    <div className="dropdown">
    <button className="dropbtn"> <a href="/#">{t('Projets')} </a></button>
    <div className="dropdown-content">
      <a href="#">{t('Achevés')}</a>
      <a href="#">{t('Encours')}</a>
      <a href="#">{t('Enprojets')}</a>
    </div>
  </div>
    
  );
}

export default Projets;