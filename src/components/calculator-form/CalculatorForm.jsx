import { Component } from 'react';
import './CalculatorForm.css';

class CalculatorForm extends Component {

  // operation = '+';

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
    });
  }

  handleSubmit = () => {
    const { firstNo, secondNo, operation } = this.state;
    // const { operation } = this;

    const ifirstNo = parseInt(firstNo);
    const isecondNo = parseInt(secondNo);

    let ans;

    switch(operation) {
      case '+': ans = ifirstNo + isecondNo;
        break;
      case '-': ans = ifirstNo - isecondNo;
        break;
      case '*': ans = ifirstNo * isecondNo;
        break;
      default: ans = '';
    }

    this.setState({
      ans
    });
    // re render
  }

  render() {
    const { firstNo, secondNo, operation, ans } = this.state;
    const isDisabled = !firstNo || !secondNo || isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));

    return (
      <div className='calculator-form'>
        <div className='row'>
          <input type="text" name="firstNo" placeholder="Enter first no" onChange={this.handleChange}/>
          <select name="operations" onChange={this.handleOperationChange}>
            <option>+</option>
            <option>-</option>
            <option>*</option>
          </select>
          <input type="text" name="secondNo" placeholder="Enter second no" onChange={this.handleChange}/>
        </div>
        <div className='row'>
          <button disabled={isDisabled} onClick={this.handleSubmit}>Calculate</button>
        </div>
        <div className='row'>
          <input type="text" name="ans" value={ans} readOnly placeholder="Here comes the ans"/>
        </div>
        <div className='row'>
          <h2>Live algebraic expression</h2>
          <span>{ans ? `${firstNo} ${operation} ${secondNo} = ${ans}`: null}</span>
        </div>
      </div>
    )
  }
}

export default CalculatorForm;