import React from "react";
class GrandChild extends React.Component{
    constructor(props){
        super(props);
        this.state = props.user;
    }
    updateUser = () => {console.log("Grandchild Updating User")}
    render(){
        return (
            <div className="row grand-child">
                <div className="col-sm-12 user-info">
                    <h4>GrandChild</h4>
                    <h5>User Values</h5>
                    <p>First Name: {this.state.first_name}</p>
                    <p>Last Name: {this.state.last_name}</p>
                    <button className="btn btn-danger btn-sm" onClick={this.updateUser}>Update User</button>
                </div>
            </div>
        )
    }
}
export default GrandChild
