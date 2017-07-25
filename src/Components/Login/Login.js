import React from 'react';
import './Login.scss'

class Login extends React.Component{
  constructor(props) {
    super(props)
    this.state = {loggedIn: false};
  }
  loggedIn = () => {
    this.setState({
        loggedIn: true
    })
  }
  loggedOut = () => {
      this.setState({
          loggedIn: false
      })
  }
    render(){
      // if(this.state.loggedIn == true){
      //      return (
      //          <div>
      //              <h1>You are currently Logged In</h1>
      //              <button onClick={this.loggedOut}>Log Out</button>
      //          </div>
      //      )
      //  } else {
      //      return (
      //          <div>
      //              <h1>You are currently Logged Out</h1>
      //              <button onClick={this.loggedIn}>Log In</button>
      //          </div>
      //      )
      //  }
      return (
            <div>
              {/* the first statement inside of the {} will be your conditional. If that evaluates to true, then everything after && will be rendered onto the page. */}
                {this.props.first_name &&
                     <h1>Hello, {this.props.first_name}</h1>
                }
                {this.state.loggedIn === true &&
                    <div>
                        <h1>You are currently Logged In</h1>
                        <button onClick={this.loggedOut}>Log Out</button>
                    </div>
                }
                {this.state.loggedIn === false &&
                    <div>
                        <h1>You are currently Logged Out</h1>
                        <button onClick={this.loggedIn}>Log In</button>
                    </div>
                }
            </div>
        )
    }
}
export default Login;
