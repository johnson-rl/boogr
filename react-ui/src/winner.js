import React, { Component } from 'react';

class Winner extends Component {
  render() {
    return(
      <div>
        <div>
          <img src="https://www.dropbox.com/s/tlwvzf8wx6c8hku/win_screen_01.png?dl=1" className="img-responsive winner" alt="A winner is you!" />
        </div>
        <div>
          <p>Congratulations! You rescued Dr. Tron</p>
        </div>
      </div>
    );
  }
}

export default Winner;
