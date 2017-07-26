import React from "react";
class ListItem extends React.Component{
    render(){
        //render list item
        return (<li>{this.props.user}</li>)
    }
}
export default ListItem;
