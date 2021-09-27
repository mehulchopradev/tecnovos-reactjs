import './TaskItem.css';
import moment from 'moment';

import { capitalize } from '../../utils/string-utils';

function TaskItem({ task: { title, createdDate } }) {

  return (
    <div className='task-item'>
      <input type="checkbox" />
      <span>{capitalize(title)}</span>
      <span>({moment(createdDate).format('DD-MM-YYYY')})</span>
    </div>
  )
}

export default TaskItem;