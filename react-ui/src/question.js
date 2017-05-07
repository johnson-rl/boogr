import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="Question">

        <h1>Answer all the questions!</h1>

      	<div className="question-container">
      		<p>
      			This is a question (?)
      		</p>
      	</div>

      	<div className="row answers-container">
      		<div className="col-xs-3">
      			<button className="btn btn-answer">Answer A</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">Answer B</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">Answer C</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">Answer D</button>
      		</div>
      	</div>

      </div>
    );
  }
}

export default Question;
