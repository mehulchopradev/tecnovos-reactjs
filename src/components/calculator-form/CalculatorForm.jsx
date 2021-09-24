import './CalculatorForm.css';

function CalculatorForm (props) {

  const { firstNo, secondNo, operation, ans, handleChange, handleAns, handleOperationChange } = props;
  const isDisabled = !firstNo || !secondNo || isNaN(parseInt(firstNo)) || isNaN(parseInt(secondNo));

  const handleSubmit = () => {
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

    handleAns(ans);
  };

  return (
    <div className='calculator-form'>
      <div className='row'>
        <input type="text" name="firstNo" placeholder="Enter first no" onChange={handleChange}/>
        <select name="operations" onChange={handleOperationChange}>
          <option>+</option>
          <option>-</option>
          <option>*</option>
        </select>
        <input type="text" name="secondNo" placeholder="Enter second no" onChange={handleChange}/>
      </div>
      <div className='row'>
        <button disabled={isDisabled} onClick={handleSubmit}>Calculate</button>
      </div>
      <div className='row'>
        <input type="text" name="ans" value={ans} readOnly placeholder="Here comes the ans"/>
      </div>
    </div>
  )
}

export default CalculatorForm;