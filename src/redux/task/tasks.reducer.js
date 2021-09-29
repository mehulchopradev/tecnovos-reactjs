const INITIAL_STATE = {
  tasks: [],
  checkedTasks: []
}

const tasksReducer = (currentState = INITIAL_STATE, payload) => {
  const { type, data } = payload;

  switch(type) {
    case 'NEW_TASK':
      const task = { ...data };
      task.id = currentState.tasks.length + 1;

      return {
        ...currentState,
        tasks: currentState.tasks.concat([task])
      }
    case 'CHECK_UNCHECK_TASK':
      const { id, checked } = data;
      let newState;
      if (checked) {
        newState = {
          ...currentState,
          checkedTasks: currentState.checkedTasks.concat([id])
        }
      } else {
        newState = {
          ...currentState,
          checkedTasks: currentState.checkedTasks.filter(taskId => taskId !== id)
        }
      }
      
      console.log(newState);
      return newState;
    case 'CLEAR_TASKS':
      return {
        ...currentState,
        tasks: currentState.tasks.filter(task => !currentState.checkedTasks.includes(task.id)),
        checkedTasks: []
      }
    default:
      return currentState;
  }
}

export default tasksReducer;