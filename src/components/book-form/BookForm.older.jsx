import './BookForm.css';

import { useRef } from 'react';

// uncontrolled form component
function BookForm() {

  const titleRef = useRef();
  const priceRef = useRef();
  const pagesRef = useRef();

  const handleSubmit = (event) => {
    event.preventDefault();

    const title = titleRef.current.value;
    const price = priceRef.current.value;
    const pages = pagesRef.current.value;

    console.log(title, price, pages);
  }

  return (
    <div className='book-form'>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" name="title" placeholder="Enter title" ref={titleRef}/>
        </p>
        <p>
          <input type="text" name="price" placeholder="Enter price" ref={priceRef}/>
        </p>
        <p>
          <input type="text" name="pages" placeholder="Enter pages" ref={pagesRef}/>
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default BookForm;