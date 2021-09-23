import { render, screen } from '@testing-library/react';
import LiveAlgebraicExpression from './LiveAlgebraicExpression';

function getComponent(firstNo, secondNo, operation, ans) {
  return <LiveAlgebraicExpression firstNo={firstNo} secondNo={secondNo} operation={operation} ans={ans} />;
}

describe('LiveAlgebraicExpression test suite', () => {
  test('it verifies the live expression component when all props are passed to it', () => {
    render(getComponent(12, 10, '+', 22));

    expect(screen.getByText('12 + 10 = 22')).toBeInTheDocument();
  });

  test('it verifies the live expression component when ans prop is not passed to it', () => {
    render(getComponent(12, 10, '+'));

    expect(screen.getByTestId('expression')).toHaveTextContent('');
  });
});