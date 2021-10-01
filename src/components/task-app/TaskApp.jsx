import './TaskApp.css';

import { withRouter } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';

import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';

import { clearTasks } from '../../redux/task/tasks.action';

function TaskApp(props) {
  console.log('Task APPP');
  console.log(props);

  const checkedTasks = useSelector(rootState => rootState.tasksReducer.checkedTasks);
  const dispatch = useDispatch();

  const handleClear = () => {
    dispatch(clearTasks());
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

export default withRouter(TaskApp);