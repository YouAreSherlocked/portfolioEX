import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import '../../css/index.css';

class Tile extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      id: null,
      active: false
    }

    this.getSideLength = this.getSideLength.bind(this)
    this.handleHover = this.handleHover.bind(this)
    this.handleClick = this.handleClick.bind(this)
    this.getTileNumber = this.getTileNumber.bind(this)
    this.getResponsiveTileCount = this.getResponsiveTileCount.bind(this)
  }   

  async componentDidMount() {
    await this.setState({
      id: this.props.project.id
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
    return (this.state.id < 10 ? '0' : '') + (parseInt(this.state.id))
  }

  handleHover() {
    this.setState(lastState => ({
      active: !lastState.active
    }))
  }

  handleClick() {
    this.props.history.push('detail/' + this.state.id);
  }

  render() {
    return ( 
      <div className="tile"
           onClick={ this.handleClick }
           id={ 'tile-' + this.props.id }
           style={{height: this.getSideLength(),
                    flexBasis: (100 / this.getResponsiveTileCount()) + '%',
                    backgroundImage: 'url(' + this.props.project.img + ')',
                    color: this.props.project.accent
                  }} 
           onMouseEnter={ this.handleHover }
           onMouseLeave={ this.handleHover }>
          <div className={ 'tile-content' + (this.state.active ? ' tile-center' : '')}>
            <p>{ this.props.project.title }</p>
            <hr style={{ background: this.props.project.accent }}></hr>
            <h2>{ this.getTileNumber() }</h2>
          </div>
        <div className={'bg ' + (this.props.project.accent === '#111' ? 'bg-white' : 'bg-black') }></div>
      </div>
    );
  };
}

export default withRouter(Tile);