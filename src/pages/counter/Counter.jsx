import Button from "../../components/ui/button/Button";
import { useCallback, useState } from "react";



function Counter() {
  const [counter, setCounter] = useState(0);

  const onSetSomething = useCallback(() => {
    console.log('Make an api call when counter is ');
  }, []);

  const onClickHandler = () => {
    setCounter(counter + 1);
  };

  return (
    <div>
      <label>{counter}</label>
      <Button label="Increment" onClick={onClickHandler}/>
      <Button label="Set something" onClick={onSetSomething}/>
    </div>
  )
}

export default Counter;