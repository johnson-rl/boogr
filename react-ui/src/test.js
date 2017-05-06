import React, {Component} from "react";

const Test = (props) => {
  console.log(props)

    return(
      <div className="col-xs-6 game">
        <div className="col-xs-2 tissue-div">
          <img src={"https://i.imgur.com/qIRjoAW.jpg"} alt="sub" className="tissue-img img-responsive"/>
        </div>
        <div className="col-xs-3 tissue-count">
          <h4>Tissue Count:</h4>
        </div>
        <div className="col-xs-3 col-xs-offset-2 tissue-count">
          <h4>Tissue Count:</h4>
        </div>
        
        <div className="col-xs-2 booger-div">
          <img src={"https://i.imgur.com/ntqBYhK.jpg"} alt="sub" className="booger-img img-responsive"/>
        </div>
        <div className="sub">
          <img src={"https://i.imgur.com/LX0IkHs.jpg"} alt="sub" className="banana-img img-responsive"/>
        </div>
      </div>
      )
}

export default Test