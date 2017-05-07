import React, {Component} from "react";

const Test = (props) => {
  console.log(props)

    return(
      <div className="game">
        <div className="col-xs-2 tissue-div">
          <img src={"https://www.dropbox.com/s/s15c6ztkqqgm0p7/tissue.png?dl=1"} alt="sub" className="tissue-img img-responsive"/>
        </div>
        <div className="col-xs-3 tissue-count">
          <h4>Tissue Count:</h4>
          <h4>4</h4>
        </div>
        <div className="col-xs-3 col-xs-offset-2 tissue-count">
          <h4>Booger Count:</h4>
          <h4>4</h4>
        </div>

        <div className="col-xs-2 booger-div">
          <img src={"https://www.dropbox.com/s/35u721enx6fyf8h/booger.png?dl=1"} alt="sub" className="booger-img img-responsive"/>
        </div>
        <div className="sub">
          <img src={"https://www.dropbox.com/s/vzrl59rr59nllkq/boat.png?dl=1"} alt="sub" className="banana-img img-responsive"/>
        </div>
      </div>
      )
}

export default Test
