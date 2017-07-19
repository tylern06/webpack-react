import React from 'react';
import Prop from './Components/Prop/Prop.js';
import Event from './Components/Event/Event.js';
import State from './Components/State/State.js';
import Counter from './Components/Counter/Counter.js';
import Life from './Components/Life/Life.js';

let user = {first_name: "Steph", last_name: "Villalobos", age: 30};
//let parent, App, mount/remove it's component and their respective elements/events that were created
class App extends React.Component {
  constructor(props){
       super(props);
       this.state = {showCountDown: true}
   }
   removeCountDown = () => {
     this.setState({showCountDown: false});
   }
  render() {
    // return (
    //     <Prop user={user}/>
    //     <Event/>
    //     <State/>
    //     <Counter name="Tyler"/>
    //     <Life/>
    // )
    if(this.state.showCountDown){
       return (
           <Life destroyMethod={this.removeCountDown}/>
       )
    } else {
         return (
             <h1>Crisis Averted</h1>
         )
    }
  }
}

export default App;
