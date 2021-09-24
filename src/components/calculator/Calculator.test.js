import { render, screen, fireEvent } from '@testing-library/react';
import Calculator from './Calculator';

const component = <Calculator/>;

describe('Calculator test suite', () => {
  test('it verifies the calculation when changing each of the fields', () => {
    render(component);

    let textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[0], {
      target: {
        value: '10'
      }
    });
    fireEvent.change(textboxes[1], {
      target: {
        value: '25'
      }
    });
    fireEvent.change(screen.getByRole('combobox'), {
      target: {
        value: '*'
      }
    });
    fireEvent.click(screen.getByRole('button'));

    textboxes = screen.getAllByRole('textbox');
    expect(textboxes[2]).toHaveValue('250');
  });

  test('it verifies the calculation when changing only the input fields', () => {
    render(component);

    let textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[0], {
      target: {
        value: '3'
      }
    });
    fireEvent.change(textboxes[1], {
      target: {
        value: '25'
      }
    });
    fireEvent.click(screen.getByRole('button'));

    textboxes = screen.getAllByRole('textbox');
    expect(textboxes[2]).toHaveValue('28');
  });

  test('it verifies live algebraic expression component working', () => {
    render(component);

    expect(screen.getByTestId('expression')).toHaveTextContent('');

    let textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[0], {
      target: {
        value: '3'
      }
    });

    expect(screen.getByTestId('expression')).toHaveTextContent('');

    fireEvent.change(textboxes[1], {
      target: {
        value: '25'
      }
    });
    expect(screen.getByTestId('expression')).toHaveTextContent('');

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('3 + 25 = 28')).toBeInTheDocument();

    fireEvent.change(textboxes[0], {
      target: {
        value: '4'
      }
    });
    expect(screen.getByText('4 + 25 = 28')).toBeInTheDocument();
    fireEvent.change(textboxes[1], {
      target: {
        value: '26'
      }
    });
    expect(screen.getByText('4 + 26 = 28')).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button'));
    expect(screen.getByText('4 + 26 = 30')).toBeInTheDocument();
  });
});