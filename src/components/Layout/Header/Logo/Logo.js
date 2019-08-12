import React from 'react';
import logo from '../../../../assets/img/surf-logo.svg'

const Logo = () => (
  <div className="Logo">
    <img src={logo} alt="Logo" className="Logo__image"/>
    <p className="Logo__title">Arc Surf</p>
  </div>
)

export default Logo;