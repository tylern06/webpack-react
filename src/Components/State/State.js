import React from 'react';
import './State.scss'

class State extends React.Component {
  constructor() {
    // super(props);
    //need to call super() to refer to this element below
    super()
    this.state = {'lights' : 'on',
                   'hover' : 'hoveroff'
                };
  }
  turnOn = () => {
    //The feature that makes state so powerful is that every time we update state, React will re-render the HTML of the component.
    this.setState({'lights': "on"})
  }
  turnOff = () => {
    this.setState({'lights': "off"})
  }
  hoverOn = () => {
    this.setState({'hover': "hoveron"})
  }
  hoverOff = () => {
    this.setState({'hover': "hoveroff"})
  }
  render() {
    return (
      <div id = "box" className={this.state.lights + " " + this.state.hover} onMouseOver={this.hoverOn} onMouseOut={this.hoverOff}>
           <button className="btn btn-primary" onClick={this.turnOn}>Turn On</button>
           <button className="btn btn-danger" onClick={this.turnOff}>Turn Off</button>
       </div>
    )
  }
}

export default State;
