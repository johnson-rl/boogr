import React from 'react';

const Credits = (props) => {
  console.log(props)
  return (
    <div className="game-title">
      <h3>Boogie Down was brought to you by Boogie Down Productions</h3>
      <div className="row">
        <h4>Cast:</h4>
          <p>Dr. Boogertron - Dmitry Akhchin</p>
          <p>Drizz - Aryn Rozelle</p>
          <br />
          <p>The greatest boogers we've ever picked:</p>
          <p>Thegamershizzap | Drizz | Mirez | Fastout | Prendium | Tinytalon</p>
          <p>Special thanks to our boogers and everyone at twitch for their generous contributions to charity!!!</p>
        </div>

      <div className="row">
        <h4>Crew:</h4>
        <div className="col-xs-6">
          <p>Game Design by:</p>
          <p>The Boogie Down Productions Team</p>

          <p>Music by:</p>
          <p>Dmitry Akhchin</p>

          <p>Sound Mixing by:</p>
          <p>Dmitry Akhchin and Austin Baxter</p>

          <p>Artwork by:</p>
          <p>Jia Yi Lim and Ryann Weller</p>

          <p>Knowledge guru:</p>
          <p>Priscilla Hamiter</p>

        </div>
        <div className="col-xs-6">
          <p>Written by:</p>
          <p>Victoria</p>

          <p>Story by:</p>
          <p>Victoria and David Sachs</p>

          <p>Produced by:</p>
          <p>Michael Blair</p>

          <p>Lead Engineer:</p>
          <p>Ryan Johnson</p>

          <p>Engineered by:</p>
          <p>Ryan Johnson, Michael Blair,</p>
          <p>Brett Monzel and Dmitry Akhchin</p>
        </div>
      </div>
      <button className="btn-primary btn btr-large" onClick={props.creditToggle}>Start Game</button>
    </div>
  )
}

export default Credits
