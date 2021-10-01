import './TaskPage.css';

import TaskApp from '../../components/task-app/TaskApp';

function TaskPage(props) {
  console.log(props);

  return (
    <div>
      <h2>Track your tasks!</h2>
      <TaskApp/>
    </div>
  )
}

export default TaskPage;