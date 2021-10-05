import './Modal.css';
import ReactDOM from 'react-dom';

function Modal({ isVisible, onClose, children }) {
  if (!isVisible) {
    return null;
  }

  return ReactDOM.createPortal((
    <div className='modal'>
      <div className='overlay'></div>
      <div className='content'>
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  ), document.getElementById('modal'))
}

export default Modal;