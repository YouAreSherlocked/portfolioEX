import React, { Component, Fragment } from 'react';
import '../../css/index.css';

class Tile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      pseudo: false,
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
    this.getTileNumber = this.getTileNumber.bind(this)
    this.getResponsiveTileCount = this.getResponsiveTileCount.bind(this)
  }

  async componentDidMount() {
    await this.setState({
      id: this.props.id,
      pseudo: this.props.pseudo,
      isShown: this.props.showPseudos,
      counter: this.props.counter || 0
    })

    if (this.props.pseudo && this.props.counter < 2) {
      this.setPseudoTiles()
    }
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

  getTop() {
    return this.props.pos.y
  }

  getLeft() {
    return this.props.pos.x
  }

  getCurrentElement() {
    const id = 'tile-' + (this.state.pseudo ? 'pseudo-' + this.props.dir : '') + this.state.id
    return document.getElementById(id)
  }

  getOffset(e) {
    const rect = e.getBoundingClientRect();
    return {
      x: rect.x + window.scrollX,
      y: rect.y + window.scrollY
    };
  }

  getTileNumber() {
    return (this.state.id < 10 ? '0' : '') + (this.state.id + 1)
  }

  async setPseudoTiles() {
    await this.setState({
      showPseudos: true
    })
    const pos = this.getOffset(this.getCurrentElement())
    
    let newTileX = <Tile parentWidth={this.props.parentWidth}
                         pseudo
                         id={this.state.id + 1}
                         pos={{x: pos.x + this.getSideLength(), y: pos.y}}
                         showPseudos={this.state.showPseudos}
                         counter={this.state.counter + 1}
                         tiles={this.props.tiles}
                         dir='x'
                         key={'x' + this.state.id + 1}>
                  </Tile>
    let newTileY = <Tile parentWidth={this.props.parentWidth}
                         pseudo
                         id={this.state.id + 1}
                         pos={{x: pos.x, y: pos.y + this.getSideLength()}}
                         showPseudos={this.state.showPseudos}
                         counter={this.state.counter + 1}
                         tiles={this.props.tiles}
                         dir='y'
                         key={'y' + this.state.id + 1}>
            </Tile>

    this.setState({
      pseudotiles: [newTileX, newTileY]
    })
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

  render() {
    return ( 
      <Fragment>
        { !this.props.pseudo ? 
          <div className="tile" 
               id={'tile-' + this.state.id}
               style={{height: this.getSideLength(),
                       flexBasis: (100 / this.getResponsiveTileCount()) + '%',
                       display: this.state.isShown ? 'flex' : 'none',
                       //backgroundImage: 'url(' + this.props.project.img + ')'
                      }} 
               onMouseEnter={this.handleHover}
               onMouseLeave={this.handleLeave}>
              <p>{ this.props.pseudo ? '' : this.props.project.title }</p>
              <hr></hr>
              <h2>{ this.getTileNumber() }</h2>
          </div>
        :
          <div className={"tile-pseudo tile" + (this.props.dir ? ' tile-pseudo-' + this.props.dir : '')} 
            id={'tile-pseudo-' + this.props.dir + this.state.id}
            style={{height: this.getSideLength(), 
                    width: this.getSideLength(),
                    top: this.getTop(), 
                    left: this.getLeft(), 
                    display: this.state.isShown ? 'block' : 'none',
                  }}>
          </div>
        }
        {this.state.pseudotiles}
      </Fragment>
    );
  };
}

export default Tile;