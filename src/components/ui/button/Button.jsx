import './Button.css';

import React from 'react';

function Button({ label, onClick }) {
  console.log('Button rendered ', label);

  return (
    <button className='mybutton' onClick={onClick}>{label}</button>
  )
}

export default React.memo(Button);