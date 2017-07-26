import React from "react";
class TaskItem extends React.Component{
    render(){
        //render list item
        return (<li>{this.props.task}</li>)
    }
}
export default TaskItem;
