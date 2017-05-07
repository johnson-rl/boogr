import React, { Component } from 'react';
import Question from './question';
import Enemy from './enemy';
import Board from './board';
import Test from './test'

import MathQuestion from './math-question';

import AudioStuff from './audiostuff';

import Wad from 'web-audio-daw';


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
    incorrect: ["1", "4", "3"],
    difficulty: 5,
    subject: "subject must be in quotes"
  }
]



/* Load Audio FX */


window.answer_correct_tier_1 = new Wad({source : 'https://dl.dropboxusercontent.com/s/epuaco1gg71w3rp/answer_correct_tier_1.mp3?dl=1'});
window.answer_correct_tier_2 = new Wad({source : 'https://dl.dropboxusercontent.com/s/hz6117s7mh4n5lr/answer_correct_tier_2.mp3?dl=1'});
window.answer_correct_tier_up = new Wad({source : 'https://dl.dropboxusercontent.com/s/asgx7650tncsf4h/answer_correct_tier_up.mp3?dl=1'});
window.answer_hover = new Wad({source : 'https://dl.dropboxusercontent.com/s/qyg9mm0s0jkidfr/answer_hover.mp3?dl=1'});
window.answer_incorrect = new Wad({source : 'https://dl.dropboxusercontent.com/s/btjzw3meg9arrsf/answer_incorrect.mp3?dl=1'});
window.booger_appear_01 = new Wad({source : 'https://dl.dropboxusercontent.com/s/orenusjgp0qlb6t/booger_appear_01.mp3?dl=1'});
window.booger_appear_02 = new Wad({source : 'https://dl.dropboxusercontent.com/s/syzga0n4wvwgy2v/booger_appear_02.mp3?dl=1'});
window.booger_appear_03 = new Wad({source : 'https://dl.dropboxusercontent.com/s/2y6unadnhdxd1wf/booger_appear_03.mp3?dl=1'});
window.booger_appear_04 = new Wad({source : 'https://dl.dropboxusercontent.com/s/vi15xz5zu93afrp/booger_appear_04.mp3?dl=1'});
window.booger_appear_05 = new Wad({source : 'https://dl.dropboxusercontent.com/s/z9nqed1sqrr5dba/booger_appear_05.mp3?dl=1'});
window.booger_appear_06 = new Wad({source : 'https://dl.dropboxusercontent.com/s/zfmz30h13xvsojm/booger_appear_06.mp3?dl=1'});
window.booger_appear_07 = new Wad({source : 'https://dl.dropboxusercontent.com/s/d6j0n7t43uvp2d4/booger_appear_07.mp3?dl=1'});
window.booger_appear_08 = new Wad({source : 'https://dl.dropboxusercontent.com/s/76ipkiihtqmvy58/booger_appear_08.mp3?dl=1'});
window.booger_appear_09 = new Wad({source : 'https://dl.dropboxusercontent.com/s/broc6wtufmusyu1/booger_appear_09.mp3?dl=1'});
window.booger_appear_10 = new Wad({source : 'https://dl.dropboxusercontent.com/s/8duncok7sfmeqrw/booger_appear_10.mp3?dl=1'});
window.booger_appear_11 = new Wad({source : 'https://dl.dropboxusercontent.com/s/t3faaht7x0yugsj/booger_appear_11.mp3?dl=1'});
window.booger_appear_12 = new Wad({source : 'https://dl.dropboxusercontent.com/s/ev9wpko1fi5j64h/booger_appear_12.mp3?dl=1'});
window.booger_appear_13 = new Wad({source : 'https://dl.dropboxusercontent.com/s/j1chkub4rtav8h8/booger_appear_13.mp3?dl=1'});
window.booger_appear_14 = new Wad({source : 'https://dl.dropboxusercontent.com/s/sewkw9928ciiotn/booger_appear_14.mp3?dl=1'});
window.booger_defeat_01 = new Wad({source : 'https://dl.dropboxusercontent.com/s/ewelrp0yam03rme/booger_defeat_01.mp3?dl=1'});
window.booger_defeat_02 = new Wad({source : 'https://dl.dropboxusercontent.com/s/xjffiahfym0kg8z/booger_defeat_02.mp3?dl=1'});
window.get_kleenex_01 = new Wad({source : 'https://dl.dropboxusercontent.com/s/tw2g4ywshhsoalp/get_kleenex_01.mp3?dl=1'});
window.get_kleenex_02 = new Wad({source : 'https://dl.dropboxusercontent.com/s/ud0jglkggoogcxj/get_kleenex_02.mp3?dl=1'});
window.get_kleenex_03 = new Wad({source : 'https://dl.dropboxusercontent.com/s/s1yojwefl2kc20u/get_kleenex_03.mp3?dl=1'});
window.get_kleenex_04 = new Wad({source : 'https://dl.dropboxusercontent.com/s/rvydhkn9tbqtgrt/get_kleenex_04.mp3?dl=1'});
window.get_kleenex_05 = new Wad({source : 'https://dl.dropboxusercontent.com/s/uxs6t5u76dgtvw5/get_kleenex_05.mp3?dl=1'});
window.get_kleenex_06 = new Wad({source : 'https://dl.dropboxusercontent.com/s/gyq30vv7bbhbr2t/get_kleenex_06.mp3?dl=1'});
window.get_kleenex_07 = new Wad({source : 'https://dl.dropboxusercontent.com/s/q2cfoj3f1m7vu6p/get_kleenex_07.mp3?dl=1'});
window.panel_transition_01 = new Wad({source : 'https://dl.dropboxusercontent.com/s/gnfmt188hn23uck/panel_transition_01.mp3?dl=1'});
window.panel_transition_02 = new Wad({source : 'https://dl.dropboxusercontent.com/s/krb74dwql599qrd/panel_transition_02.mp3?dl=1'});
window.panel_transition_03 = new Wad({source : 'https://dl.dropboxusercontent.com/s/lw9p5tkk16px5dk/panel_transition_03.mp3?dl=1'});
window.ship_move = new Wad({source : 'https://dl.dropboxusercontent.com/s/qc468psiqkju2b7/ship_move.mp3?dl=1'});
window.sub_sonar = new Wad({source : 'https://dl.dropboxusercontent.com/s/ntcsq50xlq7bq2d/sub_sonar.mp3?dl=1'});








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
              onMouseOver={ () => {window.answer_hover.play()} }
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


           <AudioStuff />

        </div>
      )
    }
  }
}

export default Game;
