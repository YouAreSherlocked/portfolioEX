import React, { Component, Fragment } from 'react';
import '../../css/index.css';
import { withRouter, Link } from 'react-router-dom';
import * as fetch from '../../service'
import Header from '../Header/Header';

class Detail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      project: null,
      loading: true,
      scroll: 0
    }

    this.handleScroll = this.handleScroll.bind(this);
    this.getStageClass = this.getStageClass.bind(this);
  }

  async componentDidMount() {
    const project = await fetch.projects.getProjectById(this.props.match.params.id)
    this.setState({ project: project });

    window.scrollTo(0, 0);
    window.addEventListener('scroll', this.handleScroll)
  }

  handleScroll() {
    this.setState({scroll: window.pageYOffset})
  }

  getStageClass() {
    const stage1 = 60;
    const stage2 = 160;
    return this.state.scroll > stage1 ? this.state.scroll > stage2 ? 'stage stage2' : 'stage stage1' : '';
  }

  render() {
    return (
      this.state.project ?
      <Fragment>
        <Header></Header>
        <div className="content-wrapper">
          <div className={ "detail-header " + this.getStageClass() }>
            <Link to="/">
              <img className="go-back" src={require('../../assets/img/goback.svg')} alt="go back"></img>
            </Link>
            <div className="detail-header-info">
              <h2>{ this.state.project.title }</h2>
              <p>{ this.state.project.description }</p>
            </div>
            <div className="placeholder"></div>
          </div>
          <div className="detail-imgs">
            <img src={ this.state.project.img } alt="project-img"></img>
            <img src={ this.state.project.img } alt="project-img"></img>
            <img src={ this.state.project.img } alt="project-img"></img>
            <img src={ this.state.project.img } alt="project-img"></img>
            <img src={ this.state.project.img } alt="project-img"></img>
          </div>
        </div>
      </Fragment>
      : <p>Loading Project...</p> 
    );
  };
}

export default withRouter(Detail);