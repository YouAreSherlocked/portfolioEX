import React, { Component } from 'react';
import '../../css/index.css';
import { withRouter } from 'react-router-dom';

class ErrorPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    return ( 
        <h2>Error</h2>
    );
  };
}

export default withRouter(ErrorPage);