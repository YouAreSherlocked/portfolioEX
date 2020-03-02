import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
import TileList from '../Tile/TileList';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return ( 
      <Fragment>
        <div className="header">
          <a href="/"><h1>timo mayer</h1></a>
          <nav>
            <li><a href="">About</a></li>
            <li><a href="">Contact</a></li>
          </nav>
        </div>
        <TileList></TileList>
      </Fragment>
    );
  };
}

export default withRouter(Home);