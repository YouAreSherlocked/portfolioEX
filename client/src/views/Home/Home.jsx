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
        <h2>Home</h2>
        <TileList></TileList>
      </Fragment>
    );
  };
}

export default withRouter(Home);