import React, { Component } from "react";
import Nav from './Nav'
import HeadeImg from './HeadeImg'

class Header extends Component {
  render() {
    return (
      <header className="header">
        <HeadeImg/>
        <Nav />
      </header>);
  }
}

export default Header;
