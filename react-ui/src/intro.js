import React, { Component } from 'react';

class Intro extends Component {
  render (){
    return (
        <div>
          <h1>Boogie Down:</h1>
          <h3>Journey to the center of Dr. GoodGuyManDudeBroChief...or something</h3>
          <img src="https://www.dropbox.com/s/rdi0gj7b0hqbuj1/dr_boogertron.png?dl=1"></img>
          <button
            onClick={this.begin}
            >Start Game</button>
        </div>
    )
  }

}
