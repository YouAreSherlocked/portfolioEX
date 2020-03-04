import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import { withRouter, Link } from 'react-router-dom';
import * as fetch from '../../service'

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      loading: true
    }
  }

    async componentDidMount() {
    const project = await fetch.projects.getProjectById(this.props.match.params.id)
    this.setState({ project: project });
  }

  render() {
    return (
      this.state.project ?
      <Fragment>
        <Link to="/">Home</Link>
        <h2>Detail</h2>
        <p>{ this.state.project.title }</p>
      </Fragment>
      : <p>Loading Project...</p> 
    );
  };
}

export default withRouter(Detail);