import React, { Component } from 'react';

class Board extends Component {
  render() {
    return(
      <div className="gameBoard">
        <img src="https://www.dropbox.com/s/ag5znfkn8bshzfi/Map.png?dl=1" className="img-responsive board" alt="game board" />

        <img src="https://www.dropbox.com/s/vzrl59rr59nllkq/boat.png?dl=1" width="70px" className="progress-boat" />
      </div>
    );
  }
}

export default Board;
