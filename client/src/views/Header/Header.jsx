import React, { Component } from 'react';
import '../../css/index.css';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return ( 
      <div className="header">
        <a href="/"><h1>timo mayer</h1></a>
        <nav>
          <li><a href="/">About</a></li>
          <li><a href="/">Contact</a></li>
        </nav>
      </div>
    );
  };
}

export default Header;