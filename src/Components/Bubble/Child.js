import React from "react";
import GrandChild from "./GrandChild"
class Child extends React.Component{
    constructor(props){
        super(props)
        this.state = props.user;
    }
    updateUser = (e) => {
      this.setState({ first_name : e.target.value });
      console.log("Updating User")
    }
    render(){
        return (
            <div className='row child'>
                <h4>This is the First Child</h4>
                <h5> First Name: {this.state.first_name} | Last Name: {this.state.last_name}</h5>
                <div className='col-sm-12'>
                    <p>First Name: <input name='first_name' type="text" value={this.state.first_name} onChange={this.updateUser} /></p>
                    <p>Last Name:  <input name='last_name' type="text" value={this.state.last_name} /></p>
                </div>
                <div className="col-sm-6 col-xs-12">
                    <GrandChild user={this.state} />
                </div>
                <div className="col-sm-6 col-xs-12">
                    <GrandChild user={this.state} />
                </div>
            </div>
        )
    }
}
export default Child
