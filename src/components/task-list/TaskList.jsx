import './TaskList.css';

import TaskItem from '../task-item/TaskItem';

function TaskList(props) {
  const { tasks, onHandleChange } = props;
  
  return (
    <div className='task-list'>
      {
        tasks.map(task => <TaskItem key={task.id} task={task} onHandleChange={onHandleChange}/>)
      }
    </div>
  )
}

export default TaskList;