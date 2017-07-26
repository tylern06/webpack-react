import React from 'react'

class Low extends React.Component {
  render(){
    return(
      <div id='low'>
        <button onClick={this.props.clickEvent}>Low Click</button>
      </div>
    )
  }
}

export default Low
