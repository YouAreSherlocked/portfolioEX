import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
import TileList from '../Tile/TileList';
import Header from '../Header/Header';

class Home extends Component {

  render() {
    return ( 
      <Fragment>
        <Header></Header>
        <TileList></TileList>
      </Fragment>
    );
  };
}

export default withRouter(Home);