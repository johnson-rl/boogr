import React, { Component } from 'react';

class Enemy extends Component {
  render() {
    console.log('enemy', this.props.enemy)
    if (this.props.enemy === 1) {
      return(
        <div className="boogs">
          <div className="col-xs-6">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
        </div>
      );
    } else if (this.props.enemy === 2) {
      return (
        <div className="boogs">
          <div className="col-xs-5">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-6">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
        </div>
      )
    } else if (this.props.enemy === 3) {
      return(
        <div className="boogs">
          <div className="col-xs-3 col-xs-offset-2">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-5">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-6">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
        </div>
      )
    } else {
      return(
        <div className="boogs">
          <div className="col-xs-3 col-xs-offset-2">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-3">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-5">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
          <div className="col-xs-6">
            <img src="https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1" className="img-responsive enemy1" alt="booooooogers" />
          </div>
        </div>
      )
    };
  }
}

export default Enemy;
