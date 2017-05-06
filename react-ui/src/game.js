import React, { Component } from 'react';

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
          <div className="col-xs-6">
            <p>Hero Image</p>
          </div>
          <div className="col-xs-6">
            <p>Enemy Image</p>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div>
              <p>This is the text of a question</p>
              <p>Answer 1</p>
              <p>Answer 2</p>
              <p>Answer 3</p>
              <p>Answer 4</p>
            </div>
          </div>
        </div>
      </div>
    )
  }

  map() {
    return(
      <div>
        <div className="col-xs-6">
          <div className="row">
            <p>Hero Image</p>
          </div>
          <div className="row">
            <p>Math Question</p>
            <p>Math Answers</p>
          </div>
        </div>
        <div className="col-xs-6">
          <p>Map goes here</p>
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
        <div className="container">
          {this.state.combat ? this.combat() : this.map() }
        </div>
      )
    }
  }
}

export default Game;