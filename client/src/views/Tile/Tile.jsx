import React, { Component, Fragment } from 'react';
import '../../css/index.css';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      pseudo: false,
      parent: null,
      pseudotiles: [],
      isShown: true,
      showPseudos: false,
      counter: 0
    }

    this.getSideLength = this.getSideLength.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.setPseudoTiles = this.setPseudoTiles.bind(this)
    this.getTop = this.getTop.bind(this)
    this.getLeft = this.getLeft.bind(this)
    this.getCurrentElement = this.getCurrentElement.bind(this)
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      parent: this.props.parent,
      pseudo: this.props.pseudo,
      isShown: this.props.showPseudos,
      counter: this.props.counter || 0
    })

    console.log(this.getSideLength())

    if (this.props.pseudo && this.props.counter < 2) {
      this.setPseudoTiles()
    }
  }

  getSideLength() {
    return this.props.parentWidth / this.props.tiles
  }

  getTop() {
    return this.state.pseudo ? this.props.pos.y : 0
  }

  getLeft() {
    return this.state.pseudo ? this.props.pos.x : 0
  }

  handleHover() {
    this.setState({
      showPseudos: true
    })
    if (!this.state.pseudo) {
      this.setPseudoTiles()
    }
  }

  async handleLeave() {
    await this.setState({
      showPseudos: false
    })
    this.setState({
      pseudotiles: null
    })
  }

  getCurrentElement() {
    const id = 'tile-' + (this.state.pseudo ? 'pseudo-' + this.props.dir : '') + this.state.id
    console.log(id)
    return document.getElementById(id)
  }

  async setPseudoTiles() {
    await this.setState({
      showPseudos: true
    })
    const pos = this.getCurrentElement().getBoundingClientRect()
    let newTileX = <Tile parentWidth={this.props.parentWidth}
                        pseudo
                        id={this.state.id + 1}
                        pos={{x: pos.x + this.getSideLength(), y: pos.y}}
                        showPseudos={this.state.showPseudos}
                        counter={this.state.counter + 1}
                        tiles={this.props.tiles}
                        dir='x'>
                  </Tile>
    let newTileY = <Tile parentWidth={this.props.parentWidth}
                         pseudo
                         id={this.state.id + 1}
                         pos={{x: pos.x, y: pos.y + this.getSideLength()}}
                         showPseudos={this.state.showPseudos}
                         counter={this.state.counter + 1}
                         tiles={this.props.tiles}
                         dir='y'>
            </Tile>

    this.setState({
      pseudotiles: [newTileX, newTileY]
    })
  }

  render() {
    return ( 
      <Fragment>
        <div className={this.state.pseudo ? "tile-pseudo tile" + (this.props.dir ? ' tile-pseudo-' + this.props.dir : '') : "tile"} 
             id={this.state.pseudo ? 'tile-pseudo-' + this.props.dir + this.state.id : 'tile-' + this.state.id}
             style={{height: this.getSideLength(), width: this.getSideLength(), flexBasis: (100 / this.props.tiles) + '%', top: this.getTop(), left: this.getLeft(), display: this.state.isShown ? 'block' : 'none'}} 
             onMouseEnter={this.handleHover}
             onMouseLeave={this.handleLeave}>{ this.state.pseudo ? '' : this.props.title }
        </div>
        {this.state.pseudotiles}
      </Fragment>
    );
  };
}

export default Tile;