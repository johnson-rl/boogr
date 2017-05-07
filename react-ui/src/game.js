import React, { Component } from 'react';
import Question from './question';
import Enemy from './enemy';
import Board from './board';
import Test from './test'

import MathQuestion from './math-question';

const questions = [
  {
    question: "What's the average speed of a laden swallow",
    correct: "European or African swallow?",
    incorrect: ["I DON'T KNOW THAT", "Blue.  No wait!  Yellowwwwwww!", "Ni"],
    difficulty: 3,
    subject: "subject must be in quotes"
  },
  {
    question: "It takes 5 tissues to defeat a booger. Billy has 3 tissues. How many more does he need?",
    correct: "2",
    incorrect: ["1", "4", "7"],
    difficulty: 5,
    subject: "subject must be in quotes"
  }
]

class Game extends Component {

  constructor(){
    super()
    this.state = {
      position : 0,
      tissues: 5,
      boogies: 0,
      combat: true,
      action: false
    };
    this.splat = this.splat.bind(this)
    this.hunt = this.hunt.bind(this)
    this.checkAns = this.checkAns.bind(this)
  }

  checkAns(selected){
    if (selected.val === 1){
      this.setState({
        action: false
      })
    }
  }

  combat() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 no-side-paddings hero-box">
            <Test />
          </div>
          <div className="col-xs-6 no-side-paddings enemy-box">
            <Enemy />
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 no-side-paddings">
            <Question
              question={questions[0]}
              checkAns={this.checkAns}
              />
          </div>
        </div>
      </div>
    )
  }

  map() {
    return(
      <div>
        <div className="row">
          <div className="col-xs-6 no-side-paddings">
            <div className="hero-box">
              <Test />
            </div>
            <div className="row">
              <div className="col-xs-12">
                <MathQuestion
                  question={questions[1]}
                  checkAns={this.checkAns}
                />
              </div>
            </div>
          </div>
          <div className="col-xs-6 no-side-paddings game-board-box">
            <Board />
          </div>
        </div>
      </div>
    )
  }

  opt() {
    return (
      <div className="container fixed-width">
        <div className="row">
          <div className="col-xs-6 no-side-paddings hero-box">
            <Test />
          </div>
          <div className="col-xs-6 no-side-paddings enemy-box">
            <Enemy />
          </div>
        </div>
        <div className="Question options row">
          <h4>Oh noes!  There are boogies in your way!!!</h4>
          <p>Do you want to answer trivia questions to earn extra tissues, or use your current tissues to splat the boogies?</p>
          <div className="col-xs-4 col-xs-offset-2">
            <button
              className="btn btn-primary btn-large"
              onClick={this.splat}
              >Splat Boogies</button>
          </div>
          <div className="col-xs-4">
            <button
              className="btn btn-danger btn-large"
              onClick={this.hunt}
              >Earn Tissue</button>
          </div>
        </div>
      </div>
    )
  }

  hunt(){
    this.setState({
      action: true,
      combat: true
    })
  }

  splat() {
    this.setState({
      action: true,
      combat: false
    })
  }


  render(){

    if (!this.state.action) {
      return (
        this.opt()
      )
    } else {
      return (
        <div className="container fixed-width">
          {this.state.combat ? this.combat() : this.map() }
        </div>
      )
    }
  }
}

export default Game;
