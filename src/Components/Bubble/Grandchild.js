import React from "react";
class GrandChild extends React.Component{
    constructor(props){
        super(props);
        //set the intial state to display
        this.state = props.user;
    }
    updateUser = (e) => {
      //Don't set state of passed parents props
      //   this.setState({
      //     first_name: "Grand Child",
      //     last_name: "Update Self"
      // })
      console.log("Grandchild Updating User")
    }

    // React stops components from constantly re-rendering when props are passed dow from parent
    // componentWillReceiveProps is triggered if the values passed into the component are different from what they were before.
    componentWillReceiveProps(props){
      this.setState({
          first_name: props.user.first_name,
          last_name: props.user.last_name
      })
    }

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
