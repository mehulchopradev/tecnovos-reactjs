import { render, screen, fireEvent } from '@testing-library/react';
import CalculatorForm from './CalculatorForm.old';

const component = <CalculatorForm/>;

describe('CalculatorForm old test suite', () => {
  test('it verifies the enabling/disabling of the calculate button', () => {
    render(component);

    expect(screen.getByRole('button')).toBeDisabled();

    const textboxes = screen.getAllByRole('textbox');
    fireEvent.change(textboxes[0], {
      target: {
        value: '54'
      }
    });
    expect(screen.getByRole('button')).toBeDisabled();

    fireEvent.change(textboxes[1], {
      target: {
        value: '100'
      }
    });

    expect(screen.getByRole('button')).toBeEnabled();

    fireEvent.change(textboxes[0], {
      target: {
        value: 'mehul'
      }
    });
    expect(screen.getByRole('button')).toBeDisabled();
  });

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
});