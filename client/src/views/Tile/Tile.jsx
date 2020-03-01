import React, { Component, Fragment } from 'react';
import '../../css/index.css';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      pseudo: false,
      parent: null,
      pseudotile: null
    }

    this.getHeight = this.getHeight.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.setPseudoTile = this.setPseudoTile.bind(this)
    this.getTop = this.getTop.bind(this)
    this.getLeft = this.getLeft.bind(this)
  }

  componentDidMount() {
      this.setState({
      id: this.props.id,
      parent: this.props.parent,
      pseudo: this.props.pseudo
    })
    
    if (this.state.pseudo) {
      this.setPseudoTile()
    }
  }

  getHeight() {
    return this.props.parentWidth / 3
  }

  getTop() {
    return this.state.pseudo ? this.props.pos.y : null
  }

  getLeft() {
    return this.state.pseudo ? this.props.pos.x + this.getHeight() : null
  }

  handleHover() {
    if (!this.state.pseudo) {
      this.setPseudoTile()
    }
  }

  setPseudoTile() {
    const pos = document.getElementById('tile-' + (this.state.id)).getBoundingClientRect()
    let newTile = <Tile parentWidth={this.props.parentWidth} 
                        pseudo
                        id={this.state.id}
                        pos={pos}>
                  </Tile>

    this.setState({
      pseudotile: newTile
    })
  }

  render() {
    return ( 
      <Fragment>
        <div className={this.state.pseudo ? "tile-pseudo tile" : "tile"} 
             id={this.state.pseudo ? 'tile-pseudo-' + this.state.id : 'tile-' + this.state.id}
             style={{height: this.getHeight(), width: this.getHeight(), background: '#eee', top: this.getTop(), left: this.getLeft()}} 
             onMouseEnter={this.handleHover}>{ this.state.pseudo ? '' : this.props.title }
        </div>
        {this.state.pseudotile}
      </Fragment>
    );
  };
}

export default Tile;