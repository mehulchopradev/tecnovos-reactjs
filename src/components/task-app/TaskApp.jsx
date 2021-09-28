import { Component } from 'react';
import './TaskApp.css';

import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';

class TaskApp extends Component {

  // initial state
  state = {
    tasks: [],
    checkedTasks: []
  }

  handleNewTask = (newTask) => {
    // this.state.tasks.push(newTask); // not going to do any re render

    // we have to handle the id generation
    const clonedNewTask = { ...newTask };

    this.setState((prevState, prevProps) => {
      const { tasks } = prevState;
      clonedNewTask.id = tasks.length + 1;

      return {
        tasks: tasks.concat([clonedNewTask])
      };
    });

    /* clonedNewTask.id = this.state.tasks.length + 1;

    // new value depends upon the value from the previous state
    this.setState({
      tasks: this.state.tasks.concat([clonedNewTask])
    }) */ // re render

    // setState is an asynchronous call (batched)
  }

  handleChange = (taskId) => {
    this.setState((prevState, prevProps) => {
      const { checkedTasks } = prevState;
      const clonedCheckedTasks = [...checkedTasks];
      if (clonedCheckedTasks.includes(taskId)) {
        clonedCheckedTasks.splice(clonedCheckedTasks.indexOf(taskId), 1);
      } else {
        clonedCheckedTasks.push(taskId);
      }

      return {
        checkedTasks: clonedCheckedTasks
      }
    });
    /* const { checkedTasks } = this.state;
    const clonedCheckedTasks = [...checkedTasks];
    if (clonedCheckedTasks.includes(taskId)) {
      clonedCheckedTasks.splice(clonedCheckedTasks.indexOf(taskId), 1);
    } else {
      clonedCheckedTasks.push(taskId);
    }

    this.setState({
      checkedTasks: clonedCheckedTasks
    }); */ // re render
  }

  handleClear = () => {
    /* this.setState({
      tasks: this.state.tasks.filter(task => !this.state.checkedTasks.includes(task.id)),
      checkedTasks: [],
    }) */ // re render

    this.setState((prevState, prevProps) => {
      return {
        tasks: prevState.tasks.filter(task => !this.state.checkedTasks.includes(task.id)),
        checkedTasks: []
      }
    });
  }

  render() {
    return (
      <div className='task-app'>
        <TaskForm onNewTask={this.handleNewTask}/>
        <TaskList tasks={this.state.tasks} onHandleChange={this.handleChange}/>
        <div>
          <button disabled={!this.state.checkedTasks.length} onClick={this.handleClear}>Clear completed todos</button>
          <span>({this.state.checkedTasks.length})</span>
        </div>
      </div>
    )
  }
}

export default TaskApp;