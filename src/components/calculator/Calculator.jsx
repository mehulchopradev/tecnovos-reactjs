import { Component } from 'react';
import './Calculator.css';

import CalculatorForm from '../calculator-form/CalculatorForm';
import LiveAlgebraicExpression from '../live-algebraic-expression/LiveAlgebraicExpression';

class Calculator extends Component {

  // initial state
  state = {
    firstNo: '',
    secondNo: '',
    ans: '',
    operation: '+'
  }

  handleChange = ({ target: { name, value } }) => {
    // this will be the component object
    this.setState({
      [name]: value
    }); // re render
  };

  handleOperationChange = ({ target: { value } }) => {
    // this.operation = value; // will not cause a re render
    this.setState({
      operation: value
    }); // re render
  }

  handleAns = (ans) => {
    this.setState({
      ans
    }); // re render
  }

  render() {
    const { firstNo, secondNo, operation, ans } = this.state;
    return (
      <>
        <CalculatorForm
          firstNo={firstNo}
          secondNo={secondNo}
          operation={operation}
          ans={ans}

          handleChange={this.handleChange}
          handleOperationChange={this.handleOperationChange}
          handleAns={this.handleAns}
        />
        <LiveAlgebraicExpression
          firstNo={firstNo}
          secondNo={secondNo}
          operation={operation}
          ans={ans}
        />
      </>
    )
  }
}

export default Calculator;