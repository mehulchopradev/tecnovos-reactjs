import { useState } from "react";

import { useDispatch } from "react-redux";

function TaskForm() {
  const [newTask, setNewTask] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { value }}) => {
    setNewTask(value); // re render
  };

  const handleClick = () => {

    // Redux is a synchronous system
    dispatch({
      type: 'NEW_TASK',
      data: {
        title: newTask,
        createdDate: new Date()
      }
    });

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