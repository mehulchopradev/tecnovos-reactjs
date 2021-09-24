import { render, screen } from "@testing-library/react";
import TaskItem from './TaskItem';

function getComponent(title, createdDate) {
  const task = {
    title,
    createdDate
  }
  return <TaskItem task={task}/>
}

describe('TaskItem test suite', () => {
  test('it displays title data appropriately', () => {
    const { rerender } = render(getComponent('Go to trecking'));

    expect(screen.getByText('Go to trecking')).toBeInTheDocument();

    rerender(getComponent('learN ProGramming'));
    expect(screen.getByText('Learn programming')).toBeInTheDocument();
  })
});