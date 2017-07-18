import React from 'react'
import './Counter.css'


class Counter extends React.Component{
  constructor(props) {
    super(props)
    this.val = 0;
    this.state = { 'clicked' : this.val,
                   'buttonOn' : ''
    };
    // console.log(this.props.name)
  }

  clickOn = () => {
    if(this.val == 10) {
      this.setState({'buttonOn' : 'red'});
    }
    this.setState({'clicked' : this.val++});
  }
  render() {
    return(
      <div className="container text-center">
        <h1>Hello {this.props.name}</h1>
        <button className={'btn btn-primary ' + this.state.buttonOn} onClick={this.clickOn}>Click Me!</button>
        <p>You clicked me {this.state.clicked} times</p>
      </div>
    )
  }
}

export default Counter;
