import React from 'react';
import "react-router";
import {
  BrowserRouter,
  Route,
  Link
} from 'react-router-dom'

//Components
import Prop from './Components/Prop/Prop.js';
import Event from './Components/Event/Event.js';
import State from './Components/State/State.js';
import Counter from './Components/Counter/Counter.js';
import Life from './Components/Life/Life.js';
import Clock from './Components/Clock/Clock.js';
import Form from './Components/Form/Form.js';
import Login from './Components/Login/Login.js';
import Parent from './Components/Bubble/Parent.js';
import AppComponent from './Components/App/App.js';
import List from './Components/List/List.js';
import TaskManager from './Components/TaskManager/TaskManager.js';


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
    let user = {first_name: "Steph", last_name: "Villalobos", age: 30};
    let users = ["eddy", "brendan", "goose", "eli", "marcos"];

    return (
        // BrowserRouter component wrapps all the Route components
         <BrowserRouter>
             <div>
                <nav className="navbar navbar-default">
                  <div className="container-fluid">
                    <div className="navbar-header">
                      <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                        <span className="sr-only">Toggle navigation</span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                        <span className="icon-bar"></span>
                      </button>
                      <a className="navbar-brand" href="#">Brand</a>
                    </div>

                    <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                      <ul className="nav navbar-nav">
                        <li><Link to="/">State</Link></li>
                        <li><Link to="/prop">Prop</Link></li>
                        <li><Link to="/event">Event</Link></li>
                        <li><Link to="/bubble">Bubble</Link></li>
                        <li><Link to="/counter">Counter</Link></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">One more separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                      <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Link</a></li>
                        <li className="dropdown">
                          <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Dropdown <span className="caret"></span></a>
                          <ul className="dropdown-menu">
                            <li><a href="#">Action</a></li>
                            <li><a href="#">Another action</a></li>
                            <li><a href="#">Something else here</a></li>
                            <li role="separator" className="divider"></li>
                            <li><a href="#">Separated link</a></li>
                          </ul>
                        </li>
                      </ul>
                    </div>
                  </div>
                </nav>
                {/* This is our Navigation Menu*/}
                 {/* This is how we define what components should render based off of the url */}
                 {/* When we want to define which component should be rendered at the root ("/") we have to set `exact` as one of the attributes of that route.  */}
                  <Route exact path="/" component={State} />
                  <Route path='/prop' render={() => (
                    <Prop user={user} />
                  )}/>
                  <Route path="/event" component={Event} />
                  <Route path="/bubble" component={Parent} />
                  <Route path="/counter" component={Counter} />
             </div>
         </BrowserRouter>
     )

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
    //     <div classNameName='clock'><button classNameName='btn btn-primary' onClick={this.addClock}>Add Clock</button></div>
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

    //Bubble tree component
    // return (
    //   <div>
    //     <Parent/>
    //   </div>
    // )


    // return (
    //   <div classNameName="container">
    //       <AppComponent/>
    //   </div>
    // )

    //List update component
    // return (
    //   <div classNameName="container">
    //     <List users={users} loggedIn='goose' />
    //   </div>
    // )

    //Task Manager component
    // return (
    //   <div>
    //     <TaskManager/>
    //   </div>
    // )

  }
}

export default App;
