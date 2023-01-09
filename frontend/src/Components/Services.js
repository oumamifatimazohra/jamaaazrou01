import React from 'react';
import './Dropdow.css';
import { useTranslation } from 'react-i18next';

function Services() {
  const [ t, i18n ] = useTranslation();
  return (
    <div className="dropdown">
    <button className="dropbtn"> <a href="/#">{t('Services')} </a></button>
    <div className="dropdown-content">
      <a href="#">Link 1</a>
      <a href="#">Link 2</a>
      <a href="#">Link 3</a>
    </div>
  </div>
  );
}

export default Services;