import './TaskItem.css';
import moment from 'moment';
import React from 'react';

import { capitalize } from '../../utils/string-utils';

function TaskItem({ task: { id, title, createdDate }, onHandleChange }) {
  console.log('TaskItem --- render');

  const onCheckboxCheckedUnchecked = (event) => {
    const { target: { checked } } = event;
    onHandleChange(id, checked);
  }

  return (
    <div className='task-item'>
      <input type="checkbox" onChange={onCheckboxCheckedUnchecked}/>
      <span>{capitalize(title)}</span>
      <span>({moment(createdDate).format('DD-MM-YYYY')})</span>
    </div>
  )
}

export default React.memo(TaskItem);