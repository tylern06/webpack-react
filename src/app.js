import React from 'react';
import Prop from './Components/Prop/Prop.js';
import Event from './Components/Event/Event.js';
import State from './Components/State/State.js';
import Counter from './Components/Counter/Counter.js';
import Life from './Components/Life/Life.js';
import Clock from './Components/Clock/Clock.js';
import Form from './Components/Form/Form.js';
import Login from './Components/Login/Login.js';
import Parent from './Components/Bubble/Parent.js';


let user = {first_name: "Steph", last_name: "Villalobos", age: 30};
//let parent, App, mount/remove it's component and their respective elements/events that were created
class App extends React.Component {
  constructor(props){
       super(props);
       this.state = { showCountDown: true,
                      showClock : true
                    }
   }
   removeCountDown = () => {
     this.setState({showCountDown: false});
   }
   removeClock = () => {
     this.setState({showClock: false});
   }
   addClock = () => {
     this.setState({showClock: true});
   }
  render() {
    // return (
    //     <Prop user={user}/>
    //     <Event/>
    //     <State/>
    //     <Counter name="Tyler"/>
    //     <Life/>
    // )
    //
    // Life remove compenent example
    // if(this.state.showCountDown){
    //    return (
    //        <Life destroyMethod={this.removeCountDown}/>
    //    )
    // } else {
    //      return (
    //          <h1>Crisis Averted</h1>
    //      )
    // }
    //
    // Show/Hide Clock Example
    // if(this.state.showClock) {
    //   //pass down remove method as a prop to child component
    //   return (
    //     <div>
    //       <Clock removeClock1={this.removeClock}/>
    //     </div>
    //   )
    // }
    // else {
    //   return (
    //     <div className='clock'><button className='btn btn-primary' onClick={this.addClock}>Add Clock</button></div>
    //   )
    // }
    // return (
    //   <div>
    //     <Form/>
    //   </div>
    // )

    // return (
    //   <div>
    //     <Login first_name='Tyler'/>
    //   </div>
    // )

    return (
      <div className="container">
          <Parent />
      </div>
    )
  }
}

export default App;
