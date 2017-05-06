import React, { Component } from 'react';

class Question extends Component {
  render() {
    return (
      <div className="Question">

      	<div class="question-field">
      		<p>
      			This is a question
      		</p>
      	</div>
      	<div class="row">
      		<div class="col-lg-3">
      			<button class="btn">Answer A</button>
      		</div>
      		<div class="col-lg-3">
      			<button class="btn">Answer B</button>
      		</div>
      		<div class="col-lg-3">
      			<button class="btn">Answer C</button>
      		</div>
      		<div class="col-lg-3">
      			<button class="btn">Answer D</button>
      		</div>
      	</div>

      </div>
    );
  }
}

export default Question;
