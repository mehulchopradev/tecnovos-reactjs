// action object creator function in this file

import taskActionTypes from "./tasks.types"

export function createTask(title) {
  return {
    type: taskActionTypes.NEW_TASK,
    data: {
      title,
      createdDate: new Date()
    }
  }
}

export function checkUncheckTask(id, checked) {
  return {
    type: taskActionTypes.CHECK_UNCHECK_TASK,
    data: {
      id,
      checked
    }
  }
}

export function clearTasks() {
  return {
    type: taskActionTypes.CLEAR_TASKS
  }
}