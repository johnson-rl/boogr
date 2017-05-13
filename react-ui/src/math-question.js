import React, { Component } from 'react';

class MathQuestion extends Component {

  shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  render() {

    let bank = this.props.question.incorrect.map((ans)=>{
      return { ans: ans, val: 0 }
    })

    bank.push({ ans: this.props.question.correct, val: 1 })

    bank = this.shuffle(bank)

    let answers = bank.map((selection)=>{
      return (
        <div className="col-xs-6 answer-btn" key={selection.ans}>
          <button
            className="btn btn-answer"
            onClick={()=>{this.props.checkAns(selection)}}
            >{selection.ans}</button>
        </div>
      )
    })

    return (
      <div className="MathQuestion">
      	<div className="question-container">
      		<p>
      			{this.props.question.question}
      		</p>
      	</div>

      	<div className="row answers-container">
      		{answers}
      	</div>

      </div>
    );
  }
}

export default MathQuestion;
