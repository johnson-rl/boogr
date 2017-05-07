import React, { Component } from 'react';

class MathQuestion extends Component {
  render() {
    return (
      <div className="MathQuestion">

		<h1>Math questions!</h1>

      	<div className="question-container">
      		<p>
      			It takes 5 tissues to defeat a booger. Billy has 3 tissues. How many more does he need?
      		</p>
      	</div>

      	<div className="row answers-container">
      		<div className="col-xs-3">
      			<button className="btn btn-answer">1</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">2</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">3</button>
      		</div>
      		<div className="col-xs-3">
      			<button className="btn btn-answer">4</button>
      		</div>
      	</div>

      </div>
    );
  }
}

export default MathQuestion;
