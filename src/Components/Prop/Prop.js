import React from 'react';

class Prop extends React.Component{
  constructor(props) {
    //The constructor of React.Component accepts these values and sets them to this.props. So if we update the constructor we have to make sure to pass props to that constructor by using super(props).
    //Call super(props) only if you want to access this.props inside the constructor
    super(props)
     this.name = `${this.props.user.first_name} ${this.props.user.last_name}`
  }
  render() {
    return (
      <div>
        <h1>Hello, {this.name}</h1>
        <p>My age is {this.props.user.age}</p>
      </div>
    )
  }
}

export default Prop;
