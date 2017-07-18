import React from 'react';
import Prop from './Components/Prop/Prop.js';
import Event from './Components/Event/Event.js';
import State from './Components/State/State.js';
import Counter from './Components/Counter/Counter.js';
import Life from './Components/Life/Life.js';

let user = {first_name: "Steph", last_name: "Villalobos", age: 30};

class App extends React.Component {
  render() {
    return (
        // <Prop user={user}/>
        // <Event/>
        // <State/>
        // <Counter name="Tyler"/>
        <Life/>
    )
  }
}

export default App;
