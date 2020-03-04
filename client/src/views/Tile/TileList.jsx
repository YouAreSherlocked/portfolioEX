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
      projects: []
    }

    this.updateSize = this.updateSize.bind(this)
  }

   async componentDidMount() {
    const projects = await fetch.projects.getAllProjects();
    this.setState({
      projects: projects
    })

    this.updateSize()
    window.addEventListener('resize', this.updateSize);
  }

  updateSize() {
    this.setState({
      width: document.getElementById('tile-wrapper-home').offsetWidth
    })
  }

  getTiles() {
    return this.state.projects.map((project, i) => (
      <Tile project={project} parentWidth={this.state.width} id={i} key={i} tiles={3}></Tile>
    ))
  }

  render() {
    return ( 
      
      <div className="tile-wrapper" id="tile-wrapper-home">
        { this.state.projects ?
          this.getTiles()
        :
          <p>Loading Projects</p>
        }
      </div>

    );
  };
}

export default withRouter(TileList);