import { useState } from "react";

import { useDispatch } from "react-redux";
import { createTask } from "../../redux/task/tasks.action";

function TaskForm() {
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { value }}) => {
    setNewTask(value); // re render
  };

  const handleClick = () => {

    // Redux is a synchronous system
    dispatch(createTask(newTask));
    setNewTask(''); // re render (scheduled)
  };

  return (
    <div className='task-form'>
      <input type="text" value={newTask} placeholder="enter todo" onChange={handleChange}/>
      <button disabled={!newTask} onClick={handleClick}>Save</button>
    </div>
  )
}


export default TaskForm;