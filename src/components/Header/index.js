import React, { Component } from "react";
import { Route, HashRouter } from "react-router-dom";

import About from "../../components/About";


class Header extends Component {
  render() {
    return (
      <HashRouter>
        <header>
          
        </header>

        <div className="content">
          {/* <Route exact path="/" render={() => <Redirect to="/about" />} /> */}
          <Route path="/about" component={About} />
        </div>
      </HashRouter>
    );
  }
}

export default Header;
