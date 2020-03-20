import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';
import Tile from './Tile'
import * as fetch from '../../service'


class TileList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      width: 0,
      projects: [],
      readyCounter: 0,
      tiles: [],
      init: true
    }

    this.updateSize = this.updateSize.bind(this)
    this.amIready = this.amIready.bind(this)
    this.asyncsetTiles = this.asyncsetTiles.bind(this)
  }

   async componentDidMount() {
    const projects = await fetch.projects.getAllProjects();
    this.setState({
      projects: projects
    })
    this.updateSize()
    window.addEventListener('resize', this.updateSize);
    this.asyncsetTiles();
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateSize);
  }

  updateSize() {
    this.setState({
      width: document.getElementById('tile-wrapper-home').offsetWidth
    })
  }

  amIready() {
    this.setState(old => ({ readyCounter:  old.readyCounter + 1}))
  }

  asyncsetTiles() {
    const projects  = this.state.projects;
    projects.forEach((project, i) => {
      setTimeout(() => {
        let tile = <Tile project={project} parentWidth={this.state.width} key={i} tiles={3}></Tile>
        this.setState({ tiles: [...this.state.tiles, tile]})
        if (i >= projects.length -1) {
          this.setState({init: false})
        }
      }, i * 50);
    });

  }

  getTiles() {
    return this.state.projects.map((project, i) => (
      <Tile project={project} parentWidth={this.state.width} key={i} tiles={3}></Tile>
    ));
  }

  render() {
    return ( 
      <div className="tile-wrapper" id="tile-wrapper-home">
        { this.state.projects ?
          this.state.init ? this.state.tiles : this.getTiles()
        :
          <p>Loading Projects</p>
        }
      </div>

    );
  };
}

export default withRouter(TileList);