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
    onNewTask({
      title: newTask,
      createdDate: new Date()
    });
  }

  render() {
    return (
      <div className='task-form'>
        <input type="text" placeholder="enter todo" onChange={this.handleChange}/>
        <button disabled={!this.state.newTask} onClick={this.handleOnClick}>Save</button>
      </div>
    )
  }
}

export default TaskForm;