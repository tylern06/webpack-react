import React from 'react'
import './App.scss'
import Mid from './Mid'

class AppComponent extends React.Component {
  constructor() {
  // super() will calls the constructor of its parent class. This is required when you need to access some variables from the parent class.
    super()
    this.state = {count: 0};
  }

  clicked = () => {
    //cannot mutate the state by doine this.state.count++
    this.setState({count : this.state.count + 1})
  }
  render() {
    return(
      <div id='app'>
        <h1>{this.state.count}</h1>
        <Mid clickEvent={this.clicked}/>
      </div>
    )
  }
}


export default AppComponent
