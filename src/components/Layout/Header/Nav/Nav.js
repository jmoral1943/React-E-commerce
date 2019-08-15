import React from 'react';
import { Link } from 'react-router-dom';
import Hamburger from '../Hamburger/Hamburger';

const Nav = (props) => (
  <nav className="Nav">
    <Hamburger handleNav={props.handleNav}/>
    <ul className="Nav__list">
      <li>
        <Link to="/" className="Nav__link">Home</Link>
      </li>
      <li>
        <Link to="/products" className="Nav__link"> Shop</Link>
      </li>
      <li>
        <Link to="/contact" className="Nav__link">Contact Us</Link>
      </li>
      <li>
        <Link to="/cart" className="Nav__link">Cart</Link>
      </li>
    </ul>
  </nav>
);

export default Nav;