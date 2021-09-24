import './TaskItem.css';

function TaskItem({ task: { title, createdDate } }) {

  return (
    <div className='task-item'>
      <input type="checkbox" />
      <span>{title}</span>
      <span>({createdDate})</span>
    </div>
  )
}

export default TaskItem;