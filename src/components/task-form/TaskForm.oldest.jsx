import { useState } from "react";

import { connect } from "react-redux";

function TaskForm({ onNewTask }) {
  const [newTask, setNewTask] = useState('');

  const handleChange = ({ target: { value }}) => {
    setNewTask(value); // re render
  };

  const handleClick = () => {
    setNewTask('');
  
    onNewTask({
      title: newTask,
      createdDate: new Date()
    });
  };

  return (
    <div className='task-form'>
      <input type="text" value={newTask} placeholder="enter todo" onChange={handleChange}/>
      <button disabled={!newTask} onClick={handleClick}>Save</button>
    </div>
  )
}


// will be called when the Taskform component is being rendered
const fn = (dispatch) => {
  return {
    onNewTask: (newTask) => dispatch({
      type: 'NEW_TASK',
      data: newTask
    })
  } // all the properties from this javascript object returned, will be passed as handler props to the Taskform component
}

export default connect(null, fn)(TaskForm);