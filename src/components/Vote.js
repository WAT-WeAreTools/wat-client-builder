import React, { Component } from 'react';
import '../App.css';

class Vote extends Component {

  render() {
    return (
      <div className="col-md-3">
        <span onClick={this.onUpClick.bind(this)} className="glyphicon glyphicon-arrow-up" aria-hidden="true"></span>
        <h3 className="voteTag">Vote {this.props.votes}</h3>
        <span onClick={this.onDownClick.bind(this)} className="glyphicon glyphicon-arrow-down" aria-hidden="true"></span>
      </div>
    );
  }
  onUpClick() {
    this.props.votes++;
    
  }
  onDownClick() {
    this.props.votes--;
  }
}

export default Vote;
