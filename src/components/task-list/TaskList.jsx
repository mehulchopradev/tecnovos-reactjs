import './TaskList.css';

import TaskItem from '../task-item/TaskItem';

import TaskappContext from '../../context/Taskapp.context';
import { useContext } from 'react';

function TaskList(props) {
  const { onHandleChange } = props;
  const tasks = useContext(TaskappContext);
  
  return (
    <div className='task-list'>
      {
        tasks.map(task => <TaskItem key={task.id} task={task} onHandleChange={onHandleChange}/>)
      }
    </div>
  )
}

export default TaskList;