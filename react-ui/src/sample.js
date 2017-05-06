import React, {Component} from 'react';

class Sample extends Component {
  constructor(props){
    super(props);
  }



  hello() {
    console.log('hello')
  }


  render(){
    return (
      <div>
        <p>This is the sample component</p>
        <p>It is full of {props.current}</p>
        <button onSubmit={this.props.hello}>Push</button>
      </div>
    )
  }

}

export default Sample;
