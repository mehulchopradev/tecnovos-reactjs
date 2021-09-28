import { useState, useEffect } from "react";
import CalculatorForm from "../calculator-form/CalculatorForm";
import LiveAlgebraicExpression from "../live-algebraic-expression/LiveAlgebraicExpression";

import axios from "axios";

function Calculator() {

  const [data, setData] = useState({
    firstNo: '',
    secondNo: '',
    ans: '',
    operation: '+'
  });

  useEffect(() => {
    const fetchData = async () => {
      // make a call to the server for default calc data
      // and then set it on the state
      const { data } = await axios.get('https://my-json-server.typicode.com/mehulchopradev/calc-service/defaultCalcData');
      setData(data); // re render
    }

    fetchData();

    return () => {
      // this is the clean up function
      // will be called just before the component will be unmounted
      console.log('Calculator -- component will unmount');
    }
  }, []); // passing an empty dependencies array emulates a componentDidMount()

  const handleChange = ({ target: { name, value } }) => {
    setData({
      ...data,
      [name]: value
    }); // re render
  };

  const handleOperationChange = ({ target: { value } }) => {
    setData({
      ...data,
      operation: value
    }); // re render
  };

  const handleAns = (ans) => {
    setData({
      ...data,
      ans
    });
  }

  console.log(data);
  const { firstNo, secondNo, ans, operation } = data;

  useEffect(() => {
    // side effect code
    console.log(firstNo);
    console.log(secondNo);
  }, [firstNo, secondNo]);

  return (
    <>
      <CalculatorForm
        firstNo={firstNo}
        secondNo={secondNo}
        operation={operation}
        ans={ans}

        handleChange={handleChange}
        handleOperationChange={handleOperationChange}
        handleAns={handleAns}
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

export default Calculator;