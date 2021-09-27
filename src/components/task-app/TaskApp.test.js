import { render, screen, fireEvent } from "@testing-library/react";
import TaskApp from "./TaskApp";

const component = <TaskApp/>;

describe('TaskApp test suite', () => {
  test('it verifies newly added task in the list', () => {
    render(component);

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Task 1'
      }
    });
    fireEvent.click(screen.getAllByRole('button')[0]);

    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText('Task 1')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'Task 2'
      }
    });
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();

    fireEvent.change(screen.getByRole('textbox'), {
      target: {
        value: 'prOGram sCala'
      }
    });
    fireEvent.click(screen.getAllByRole('button')[0]);
    expect(screen.getByRole('textbox')).toHaveValue('');
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 2')).toBeInTheDocument();
    expect(screen.getByText('Program scala')).toBeInTheDocument();
    // TODO for the date
  });

  // TODO: test for counter and clear completed todos button when the user checks/unchecks the todo item
  // TODO: test for clicking the clear completed todos button
});