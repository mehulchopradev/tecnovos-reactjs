import { render, screen, fireEvent } from "@testing-library/react";

import TaskForm from "./TaskForm";

let title;
function handleNewTask(task) {
  title = task.title;
}

const component = <TaskForm onNewTask={handleNewTask}/>

describe('TaskForm() test suite', () => {
  test('it calls the parent handler with the new task', () => {
    render(component);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Task 1'
      }
    });
    fireEvent.click(screen.getByRole('button'));
    expect(title).toBe('Task 1');
    // TODO: assert for the createdDate
  });
});