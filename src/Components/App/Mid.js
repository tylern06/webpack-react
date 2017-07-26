import React from 'react'
import Low from './Low'

class Mid extends React.Component {
  constructor(props) {
    super(props)
  }
  render(){
    return(
      <div id='mid'>
        <button onClick={this.props.clickEvent}>Mid Click</button>
        <Low clickEvent={this.props.clickEvent}/>
      </div>
    )
  }
}

export default Mid
