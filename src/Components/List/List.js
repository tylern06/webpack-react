import React from 'react';
import ListInput from './ListInput'
import ListItem from './ListItem'

import './List.scss';

class List extends React.Component {
  constructor(props){
    super(props)
    // console.log(this.props.users.slice())
    // map function creates array of React.DOM.li elements.
    // Usually we would use an id from a database, but since we don't have that, we'll use the index of the element.
    this.state = {users: props.users}
    console.log('state users',this.state.users)
    // this.userList = this.state.users.map((user, index) => {
    //   if(user == this.props.loggedIn) {
    //     return <li key={index} className='logged-in'>{user}</li>
    //   }
    //   return <li key={index}>{user}</li>
    // })
    // console.log(this.userList)
  }

  updateUsers = (newUser) => {
      //make new copy of array
       let newUserArr = this.state.users.slice();
       newUserArr.push(newUser);
       this.setState({
           users: newUserArr
       })
   }

  render() {
    let userList = this.state.users.map((user, index) => {
        // if(user == this.props.loggedIn) {
        //   return <li key={index} className='logged-in'>{user}</li>
        // }
        return <ListItem key={index} user={user}/>
    })
    console.log('userList',userList)
    return (
      <div>
        <h1>List Component</h1>
        <ul>
          {userList}
        </ul>
        <ListInput updateUsers={this.updateUsers} />
      </div>
    )
  }

  componentDidUpdate(prevProps, prevState) {

  }
}

export default List
