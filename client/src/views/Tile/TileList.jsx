import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
import Tile from './Tile'

class TileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tiles: [
        {
          title: 'okok'
        },
        {
          title: 'second one'
        },
        {
          title: 'third one'
        },
        {
          title: 'fourth one'
        },
        {
          title: 'fifth one'
        }
      ],
      width: 1
    }

    this.updateSize = this.updateSize.bind(this)
  }

  componentDidMount() {
    this.updateSize()
    window.addEventListener('resize', this.updateSize);
  }

  updateSize() {
    this.setState({
      width: document.getElementById('tile-wrapper-home').offsetWidth
    })
  }

  getTiles() {
    return this.state.tiles.map((tile, i) => (
      <Tile title={tile.title} parentWidth={this.state.width} id={i} key={i}></Tile>
    ))
  }

  render() {
    return ( 
        <div className="tile-wrapper" id="tile-wrapper-home">
          {this.getTiles()}
        </div>
    );
  };
}

export default withRouter(TileList);