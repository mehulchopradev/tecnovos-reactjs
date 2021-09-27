import { render, screen } from "@testing-library/react";
import moment from "moment";
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
    const { rerender } = render(getComponent('Go to trecking', new Date()));

    expect(screen.getByText('Go to trecking')).toBeInTheDocument();

    rerender(getComponent('learN ProGramming', new Date()));
    expect(screen.getByText('Learn programming')).toBeInTheDocument();
  });

  test('it displays date appropriately', () => {
    let today = new Date();
    today = moment(today);
    const expected = today.format('DD-MM-YYYY');

    render(getComponent('Go to trecking', today));
    expect(screen.getByText(`(${expected})`)).toBeInTheDocument();
  })
});