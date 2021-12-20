import React, { Component } from "react";
import { Route, Navigate, HashRouter } from "react-router-dom";
import Navigation from "../../components/Navigation";
import About from "../../components/About";
// import Portfolio from "../../components/Portfolio";
import Contact from '../../components/Contact';
import Resume from '../../components/Resume';


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          <Navigation />
        </header>
      </HashRouter>
    );
  }
}

export default Header;