import React from 'react';
import './Clock.css';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    //set initial state
    this.state = {time: this.getClock()};
  }

  getClock(){
    let today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    let s = today.getSeconds();
    let ap;
    if(h == 0){
      ap ='AM';
      h = 12;
    }
    else if (h < 12) {
      ap='AM';
    }
    else if (h==12) {
      ap='PM';
    }
    else if(h > 12) {
      h -= 12;
    }
    if(m<=9) m="0"+m;
    if(s<=9) s="0"+s;
    return h + ':' + m + ':' + s + " " + ap;
  }

  render(){
    return(
      <div className='clock'>
        <h1>{this.state.time}</h1>
        <button className='btn btn-primary' onClick={this.props.removeClock1}>Remove Clock</button>
      </div>
    )
  }

  componentDidMount() {
    //update state when component is mounted
    this.clock =  setInterval(() => {
        console.log('interval running')
        this.setState({time: this.getClock()});
      }, 1000);
  }

  componentWillUnmount() {
    //clear interval once component is unmounted
    clearInterval(this.clock);
  }
}

export default Clock;
