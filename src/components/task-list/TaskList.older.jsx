import './TaskList.css';

import TaskItem from '../task-item/TaskItem';

import { connect } from 'react-redux';

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

// will be called when the TaskList component is being rendered
// it will also be called when there is any change in the state of the tasksReducer
const fn = (rootState) => {
  return {
    tasks: rootState.tasksReducer.tasks
  } // all the properties from this javascript object returned, will be passed as props to the TaskList component
}

export default connect(fn)(TaskList);