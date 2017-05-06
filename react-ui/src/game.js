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
    }
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
        <div className="col-xs-6"></div>
      </div>
    )
  }

  opt() {
    return (
      <div>
        <div className="options row">
          <div className="col-xs-4 col-xs-offset-2">
            <button className="btn btn-primary btn-large">Move</button>
          </div>
          <div className="col-xs-4">
            <button className="btn btn-danger btn-large">Hunt Tissue</button>
          </div>
        </div>
      </div>
    )
  }

  render(){
    console.log(this.state.action)

    if (!this.state.action) {
      console.log('opt')
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
