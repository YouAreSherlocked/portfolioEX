import React, { Component } from 'react';
import '../../css/index.css';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null
    }

    this.getSideLength = this.getSideLength.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.getTileNumber = this.getTileNumber.bind(this)
    this.getResponsiveTileCount = this.getResponsiveTileCount.bind(this)
  }

  async componentDidMount() {
    await this.setState({
      id: this.props.id
    })
  }

  getResponsiveTileCount() {
    if (this.props.parentWidth < 450) {
      return 1
    }
    else if (this.props.parentWidth < 700) {
      return 2
    }
    else {
      return this.props.tiles
    }
  }

  getSideLength() {
    return this.props.parentWidth / this.getResponsiveTileCount()
  }

  getTileNumber() {
    return (this.state.id < 10 ? '0' : '') + (this.state.id + 1)
  }

  handleHover() {

  }

  render() {
    return ( 
      <div className="tile" 
            id={'tile-' + this.props.id}
            style={{height: this.getSideLength(),
                    flexBasis: (100 / this.getResponsiveTileCount()) + '%',
                    backgroundImage: 'url(' + this.props.project.img + ')',
                    color: this.props.project.accent
                  }} 
            onMouseOver={this.handleHover}>
          <p>{ this.props.project.title }</p>
          <hr style={{ borderColor: this.props.accent }}></hr>
          <h2>{ this.getTileNumber() }</h2>
          <div className="bg-black"></div>
      </div>
    );
  };
}

export default Tile;