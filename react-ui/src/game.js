import React, { Component } from 'react';
import Question from './question';
import MathQuestion from './math-question';

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
    this.move = this.move.bind(this)
    this.hunt = this.hunt.bind(this)
  }

  combat() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 no-side-paddings hero-box">
            <p>Hero Image</p>
          </div>
          <div className="col-xs-6 no-side-paddings enemy-box">
            <p>Enemy Image</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 no-side-paddings">
            <Question />
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
              <p>Hero Image</p>
            </div>    
            <div className="row">
              <div className="col-xs-12">
                <MathQuestion />
              </div>
            </div>
          </div>
          <div className="col-xs-6 no-side-paddings game-board-box">
            <p>Map goes here</p>
          </div>
        </div>
      </div>
    )
  }

  opt() {
    return (
      <div>
        <div className="options row">
          <div className="col-xs-4 col-xs-offset-2">
            <button
              className="btn btn-primary btn-large"
              onClick={this.move}
              >Move</button>
          </div>
          <div className="col-xs-4">
            <button
              className="btn btn-danger btn-large"
              onClick={this.hunt}
              >Hunt Tissue</button>
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

  move() {
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
