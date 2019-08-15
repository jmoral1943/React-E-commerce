import React from 'react';
import summerPic from '../../../assets/img/homeSummer.jpeg'

const Banner = () => (
  <div className="Banner">
    <img className="Banner__image" src={summerPic} alt="Two people lounging at the beach"/>
    <p className="Banner__text">SUMMER IS HERE.</p>
  </div>
);

export default Banner;