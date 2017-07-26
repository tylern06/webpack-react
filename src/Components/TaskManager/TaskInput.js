import React from "react";
class TaskInput extends React.Component{
    constructor(props) {
      super(props)
      this.state = {task : ''}
    }
    //handle input value on change
    handleChange = (e) => {
      this.setState({ [e.target.name]: e.target.value })
    }
    updateTask = (e) => {
      e.preventDefault()
      // console.log(this.props)
      if(this.state.task) {
        this.props.updateTask(this.state.task);
        this.setState({ task: ''})
      }
    }
    render(){
        return (
          <div>
            <form>
              <input type='text' name='task' value={this.state.task} onChange={this.handleChange}/><br></br>
              <button className='btn btn-primary' onClick={this.updateTask}>Add Task</button>
            </form>
         </div>
      )
    }
}
export default TaskInput;
