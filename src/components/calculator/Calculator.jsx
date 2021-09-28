import { Component } from 'react';
import './Calculator.css';

import axios from 'axios';

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

  // lifecycle methods

  async componentDidMount() {
    console.log('Calculator --- component did mount');

    const { data } = await axios.get('https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData');
    this.setState(data);
  }

  componentWillUnmount() {
    console.log('Calculator -- component will unmount');
    // execute code that clears off things
    // releases memory
    // release listeners
  }

  // 1. Initial load
  // 2. setState
  render() {
    console.log('Calculator --- render()');
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