import './Series.css';

import { useState, useMemo } from 'react';

function evenSeries(n) {
  // CPU based
  console.log('even series computation started');
  let ans = '';
  for (let i = 0; i <=n ; i = i + 2) {
    ans += i + ' ';
  }
  console.log('even series computation ended');
  return ans;
}

function Series({ n }) {
  const [counter, setCounter] = useState(0);

  // calculate fibonacci series using the prop n
  // calculate even series using the prop n
  const evenAns = useMemo(() => evenSeries(n), [n])

  return (
    <div className='series'>
      <div className='row'>
        <label>{counter}</label>
        <button onClick={() => setCounter(counter + 1)}>Increment</button>
      </div>
      <div className='row'>
        Fibonacci series: ????
      </div>
      <div className='row'>
        Even series: {evenAns}
      </div>
    </div>
  )
}

export default Series;