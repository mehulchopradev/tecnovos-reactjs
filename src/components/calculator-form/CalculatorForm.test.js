import { render, screen } from '@testing-library/react';
import CalculatorForm from './CalculatorForm';

// mocking handlers
function handleChange({ target: { name, value } }) {

}

function handleOperationChange({ target: { value } }) {

}

function handleAns(ans) {

}

function getComponent(firstNo, secondNo, operation, ans) {
  return <CalculatorForm
    firstNo={firstNo}
    secondNo={secondNo}
    operation={operation}
    ans={ans}

    handleChange={handleChange}
    handleOperationChange={handleOperationChange}
    handleAns={handleAns}
  />;
}

describe('CalculatorForm test suite', () => {
  test('it verifies the enabling/disabling of the calculate button', () => {
    const { rerender } = render(getComponent('me', 'ch', '+'));
    expect(screen.getByRole('button')).toBeDisabled();

    rerender(getComponent(90, 'ch', '+'));
    expect(screen.getByRole('button')).toBeDisabled();

    rerender(getComponent(90, 1000, '+'));
    expect(screen.getByRole('button')).toBeEnabled();
  });
});