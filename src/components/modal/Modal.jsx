import './Modal.css';

function Modal({ isVisible }) {
  if (!isVisible) {
    return null;
  }

  return (
    <div className='modal'>
      <div className='overlay'></div>
      <div className='content'>
        Here comes the content of the modal
        <button>Close</button>
      </div>
    </div>
  )
}

export default Modal;