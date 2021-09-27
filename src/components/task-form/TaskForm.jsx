import './TaskForm.css';
import { Component } from 'react';

class TaskForm extends Component {

  // initial state
  state = {
    newTask: ''
  }

  handleChange = ({ target: { value }}) => {
    this.setState({
      newTask: value
    }); // re render
  }

  handleOnClick = () => {
    const { newTask } = this.state;
    const { onNewTask } = this.props;
    this.setState({
      newTask: ''
    }); // re render
    onNewTask({
      title: newTask,
      createdDate: new Date()
    });
  }

  render() {
    return (
      <div className='task-form'>
        <input type="text" placeholder="enter todo" value={this.state.newTask} onChange={this.handleChange}/>
        <button disabled={!this.state.newTask} onClick={this.handleOnClick}>Save</button>
      </div>
    )
  }
}

export default TaskForm;