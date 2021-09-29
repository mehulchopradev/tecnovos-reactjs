import './TaskApp.css';

import { useDispatch, useSelector } from 'react-redux';

import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';

function TaskApp() {
  const checkedTasks = useSelector(rootState => rootState.tasksReducer.checkedTasks);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch({
      type: 'CLEAR_TASKS'
    });
  }
  return (
    <div className='task-app'>
      <TaskForm />
      <TaskList/>
      <div>
        <button disabled={!checkedTasks.length} onClick={handleClear}>Clear completed todos</button>
        <span>({checkedTasks.length})</span>
      </div>
    </div>
  )
}

export default TaskApp;