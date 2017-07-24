import React from 'react';
import './Clock.scss';

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
    var ap;
    switch (true) {
      case (h == 0):
            ap ='AM';
            h = 12;
            break;
      case (h < 0):
            ap = 'AM';
            break;
      case (h == 12):
            ap = 'PM';
            break;
      case (h > 12):
            h -= 12;
            ap = 'PM';
            break;
    }
    if(m<=9) m="0"+m;
    if(s<=9) s="0"+s;
    let time = h + ':' + m + ':' + s + " " + ap;
    return time;
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
