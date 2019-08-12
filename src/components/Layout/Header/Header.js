import React from 'react';
import Logo from './Logo/Logo';
import Nav from './NavBar/Nav';

class Header extends React.Component {
  state = {
    navOpen: false
  }


  handleNavigation = () => {
    let hamburger = document.querySelector(".hamburger");
  
    let isNavOpen = this.state.navOpen;
    hamburger.classList.toggle("is-active");
    isNavOpen = !isNavOpen;
    this.setState({
      navOpen: isNavOpen
    })
  
    if (isNavOpen) {
      document.querySelector('.Nav__list').style.width = "100vw";
    } else {
      document.querySelector('.Nav__list').style.width = "0";
    }
  }

  render() {    
    return (
      <div className="Header">
        <Logo />
        <Nav handleNav={this.handleNavigation}/>
      </div>
    );
  }

};

export default Header;