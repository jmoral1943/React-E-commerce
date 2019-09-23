import React from "react";
import Logo from "./Logo/Logo";
import Nav from "./Nav/Nav";

class Header extends React.Component {
  state = {
    navOpen: false
  };

  handleNavigation = () => {
    if (
      /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
        navigator.userAgent
      )
    ) {
      let hamburger = document.querySelector(".hamburger");

      let isNavOpen = this.state.navOpen;
      hamburger.classList.toggle("is-active");
      isNavOpen = !isNavOpen;
      this.setState({
        navOpen: isNavOpen
      });

      if (isNavOpen) {
        document.querySelector(".Nav__list").style.width = "100vw";
      } else {
        document.querySelector(".Nav__list").style.width = "0";
      }
    }
  };

  render() {
    return (
      <div className="Header">
        <Logo />
        <Nav handleNav={this.handleNavigation} />
      </div>
    );
  }
}

export default Header;
