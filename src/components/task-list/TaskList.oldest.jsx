import './TaskList.css';

import TaskItem from '../task-item/TaskItem';

import { useSelector } from 'react-redux';

function TaskList() {

  // will be called when the TaskList component is being rendered
  // it will also be called when there is any change in the state of the tasksReducer 
  const tasks = useSelector(rootState => rootState.tasksReducer.tasks);
  
  return (
    <div className='task-list'>
      {
        tasks.map(task => <TaskItem key={task.id} task={task}/>)
      }
    </div>
  )
}

export default TaskList;