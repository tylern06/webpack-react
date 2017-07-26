import React from 'react';

class ListInput extends React.Component {
  constructor(props){
    super(props);
    this.state = {newUser: ""}
  }

  handleUpdate = (e) => {
    this.setState({
      // e.target == the input we're currently updating
      // e.target.value == the current value of the input
      newUser: e.target.value
    })
  }

  addUser = (e) => {
    //callback passed by List component
    this.props.updateUsers(this.state.newUser)
    this.setState({
      newUser: ""
    })
  }

  render(){
    return (
      <div>
        <p>Name: <input type="text" onChange={this.handleUpdate} value={this.state.newUser}/></p>
        <button onClick={this.addUser}>Add User</button>
      </div>
    )
  }
}

export default ListInput
