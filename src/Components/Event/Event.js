import React from 'react';

class Event extends React.Component{
    constructor(props){
      super(props);
      this.name = "Jude Crowley"
  }
  handleClick(){
      alert("Hello! " + this.name);
  }
  //This approach is made possible by "transform-class-properties" plugin to our .babelrc file.
  // handleClick = (e) => {
  //     alert("Hello! " + this.name);
  // }
  render(){
      return(
          <div>
              <h1>Hello, this is the Event Component</h1>
              <button onClick={() => this.handleClick()}>Click Me</button>
              {/* <button onClick={this.handleClick}>Click Me</button> */}
          </div>
      )
  }
}
export default Event;
