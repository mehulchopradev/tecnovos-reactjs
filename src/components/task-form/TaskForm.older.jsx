import { useState } from "react";

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

export default TaskForm;