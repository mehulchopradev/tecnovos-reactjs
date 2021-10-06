import './TaskApp.css';

import { withRouter } from 'react-router';

import { useContext, useState } from 'react';

import TaskForm from '../task-form/TaskForm';
import TaskList from '../task-list/TaskList';

import TaskappContext from '../../context/Taskapp.context';

function TaskApp(props) {
  const initialTasks = useContext(TaskappContext);
  const [tasks, setTasks] = useState(initialTasks);

  const onHandleChange = () => {
  };

  const onNewTask = (task) => {
    const newTask = {...task};
    newTask.id = tasks.length + 1;

    setTasks(tasks.concat([newTask]));
  }

  return (
    <div className='task-app'>
      <TaskForm onNewTask={onNewTask}/>

      <TaskappContext.Provider value={tasks}>
        <TaskList onHandleChange={onHandleChange}/>
      </TaskappContext.Provider>
    </div>
  )
}

export default withRouter(TaskApp);