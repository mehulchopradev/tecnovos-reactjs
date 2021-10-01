import './TaskItem.css';
import moment from 'moment';
import React from 'react';
import { useDispatch } from 'react-redux';

import { capitalize } from '../../utils/string-utils';
import { checkUncheckTask } from '../../redux/task/tasks.action';

function TaskItem({ task: { id, title, createdDate }}) {
  console.log('TaskItem --- render');

  const dispatch = useDispatch();

  const onCheckboxCheckedUnchecked = (event) => {
    const { target: { checked } } = event;
    dispatch(checkUncheckTask(id, checked));
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