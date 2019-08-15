import React from 'react';
import map from '../../../assets/img/contactpage-map.png';

const MapCard = () => (
  <div className="MapCard">
    <div className="MapCard__card">
      <p className="MapCard__title">Arc Surf Shop</p>
      <p className="MapCard__address">2012 Lincoln Blvd,</p>
      <p className="MapCard__address">Santa Monica, CA</p>
      <p className="MapCard__address">Phone: (787)899-1934</p>
      <p className="MapCard__address">Fax: (212)227-8276</p>
    </div>
    <img className="MapCard__image" src={map} alt="Map to our shop" />
  </div>
)

export default MapCard;