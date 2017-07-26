import React from 'react'
import TaskItem from './TaskItem'
import TaskInput from './TaskInput'

import './TaskManager.scss'

class TaskManager extends React.Component {
  constructor() {
    super()
    this.state = { tasks: ['study react', 'do laundry']}
    console.log(this.state.tasks)
  }

  updateTask = (task) => {
    let newTasks = this.state.tasks;
    newTasks.push(task);
    this.setState({ tasks: newTasks})
  }
  render() {
    let tasks =  this.state.tasks.map((task,index) => {
      return <TaskItem key={index} task={task} />
    })
    return (
      <div className='container'>
        <div className='task'>
          <h1>Task Manager</h1>
          <ul>
            {tasks}
          </ul>
          <TaskInput updateTask={this.updateTask}/>
        </div>
      </div>
    )
  }
}

export default TaskManager
