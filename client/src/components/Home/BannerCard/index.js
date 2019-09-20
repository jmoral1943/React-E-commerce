import React from 'react';
import { Link } from 'react-router-dom';

const BannerCard = (props) => (
  <div className="BannerCard">
    <img className="BannerCard__image" src={props.image} alt={props.descr} />
    <div className="BannerCard__content">
       <p className="BannerCard__header">{props.title}</p>
       <div className="BannerCard__links">
        <Link to="/products" className="BannerCard__button--left">SELECT OPTIONS</Link>
        <Link to="/products" className="BannerCard__button--right">MORE INFO</Link>
       </div>
    </div>
  </div>
);

export default BannerCard;