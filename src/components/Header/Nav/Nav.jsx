import React, { Component } from "react";
import {Link} from "react-router-dom"

class Nav extends Component {
  render() {
    return <nav className="nav">
    <Link rel="stylesheet" href="" to='/' className="links">Home</Link>
    <Link rel="stylesheet" href="" to='/form' className="links">form</Link>
    <Link rel="stylesheet" href="" to='/list' className="links">list</Link>
    </nav>;
  }
}

export default Nav;
