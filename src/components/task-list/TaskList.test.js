import { render, screen } from "@testing-library/react";

import TaskList from "./TaskList";

function getComponent(tasks) {
  return <TaskList tasks={tasks}/>
}

describe('TaskList() test suite', () => {
  test('it renders task list component', () => {
    const tasks = [
      {
        id: 1,
        title: 'Task 1',
        createdDate: new Date()
      },
      {
        id: 2,
        title: 'Task 2',
        createdDate: new Date()
      }
    ];

    render(getComponent(tasks));

    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    // TODO: assert for the dates too
  });
});