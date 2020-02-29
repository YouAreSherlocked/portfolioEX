import React, { Component } from 'react';
import '../../css/index.css';

class Tile extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }

    this.getWidth = this.getWidth.bind(this)
  }

  getWidth() {
    return this.props.parentWidth / 3
  }

  render() {
    return ( 
        <div className="tile" style={{height: this.getWidth()}}>{this.props.title}</div>
    );
  };
}

export default Tile;