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
    incorrect: ["1", "4", "7"],
    difficulty: 5,
    subject: "subject must be in quotes"
  }
]

let user = {
  name: "Drizz",
  position: 1,
  tissues: 5,
  boogies: 0,
  tally: 0,
  correct: [],
  incorrect: []
}

const donors = [
  "You’re disinfecting the Mobster Mirez. Think smart! Mirez is strategic and lawless.",
  "You’re disinfecting the Booger Squad Fastout. Be careful! They’re known for being quick and dirty!",
  "You’re disinfecting the Booger Mafia Prendium. Watch out! They’re crooked and nimble.",
  "You’re disinfecting the Tinytalon Gang. Don’t be fooled! They may be small but they’re ruthless.",
  "You’re disinfecting the Crime Boss Drizz. Look out! The Boss is corrupt and fierce.",
  "You’re disinfecting Thegamershizzap! Keep your cool! The gamer is crafty and tricky."
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

window.vo = new Wad({source : 'https://dl.dropboxusercontent.com/s/utjer3usldnykay/vo_inside_body_V2.mp3?dl=0' })

class Game extends Component {

  constructor(){
    super()
    this.state = {
      position : 0,
      tissues: 5,
      boogies: 0,
      combat: false,
      action: false,
      user: user,
      attempts: 3,
      spaces: 0,
      enemy: 1,
      start: true
    };
    this.splat = this.splat.bind(this)
    this.hunt = this.hunt.bind(this)
    this.checkAns = this.checkAns.bind(this)
    this.begin = this.begin.bind(this)
  }

  checkAns(selected){
    if (selected.val === 1){
      this.state.combat ? this.setState({tissues: this.state.tissues + 1}) : this.setState({spaces: this.state.spaces + 1})
      console.log(this.state)
    }
    if (this.state.attempts === 1){
      this.setState({
        action: false,
        attempts : 3
      })
    } else {
      this.setState({
        attempts: this.state.attempts - 1
      })
    }

  }

  combat() {
    return (
      <div>
        <div className="row">
          <div className="col-xs-6 no-side-paddings hero-box">
            <Test
              boogies={this.state.boogies}
              tissues={this.state.tissues}
              />
          </div>
          <div className="col-xs-6 no-side-paddings enemy-box">
            <Enemy
              enemy={this.state.enemy}/>
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
              <Test
                boogies={this.state.boogies}
                tissues={this.state.tissues}
                />
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
    let enemyName = Math.floor(Math.random()*donors.length)
    return (
      <div className="container fixed-width">
        <div className="row">
          <div className="col-xs-6 no-side-paddings hero-box">
            <Test
              boogies={this.state.boogies}
              tissues={this.state.tissues}
              />
          </div>
          <div className="col-xs-6 no-side-paddings enemy-box">
            <Enemy
              enemy ={this.state.enemy}/>
          </div>
        </div>
        <div className="Question options row">
          <h3>Oh noes!  There are boogies in your way!!!</h3>

          <h4>{donors[enemyName]}</h4>
          <div className="col-xs-4 col-xs-offset-2">
            <button
              className="btn btn-primary btn-large"
              onClick={()=>{this.splat(this.state.enemy)}}
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

  splat(enemy) {

    this.setState({
      action: true,
      combat: false,
      boogies: this.state.boogies + enemy,
      tissues: this.state.tissues - enemy,
      enemy : Math.ceil(Math.random()*4)
    })
    console.log(this.state)
  }

  begin(){
    this.setState({
      start: false
    })
  }


  render(){

    if (this.state.start === true){
      window.vo.play({
            loop    : false, // This overrides the value for loop on the constructor, if it was set.
            env     : {      // This is the ADSR envelope.
                attack  : 0,  // Time in seconds from onset to peak volume.  Common values for oscillators may range from 0.05 to 0.3.
                decay   : 0,  // Time in seconds from peak volume to sustain volume.
                sustain : 1,  // Sustain volume level. This is a percent of the peak volume, so sensible values are between 0 and 1.
                hold    : 86400, // Time in seconds to maintain the sustain volume level. If this is not set to a lower value, oscillators must be manually stopped by calling their stop() method.
                release : 0     // Time in seconds from the end of the hold period to zero volume, or from calling stop() to zero volume.
            },
      })
      return (
        <div>
          <h1>Boogie Down:</h1>
          <h3>Journey to the center of Dr. GoodGuyManDudeBroChief...or something</h3>
          <img className="image-width" src="https://www.dropbox.com/s/rdi0gj7b0hqbuj1/dr_boogertron.png?dl=1"></img>
          <button
            className="btn btn-primary"
            onClick={this.begin}
            >Start Game</button>
        </div>
      )
    }

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
