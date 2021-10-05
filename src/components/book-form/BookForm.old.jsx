import './BookForm.css';

import { useState } from 'react';

// controlled form components -- React state <-> form integration
function BookForm() {
  const [bookData, setBookData] = useState({
    title: '',
    price: '',
    pages: ''
  });

  const { title, price, pages } = bookData;

  const handleChange = ({ target: { name, value }}) => {
    setBookData({
      ...bookData,
      [name]: value
    });
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    const { title, price, pages } = bookData;
    console.log(title, price, pages);
  }

  return (
    <div className='book-form'>
      <h2>Add a new book</h2>
      <form onSubmit={handleSubmit}>
        <p>
          <input type="text" value={title} name="title" placeholder="Enter title" onChange={handleChange}/>
        </p>
        <p>
          <input type="text" value={price} name="price" placeholder="Enter price" onChange={handleChange}/>
        </p>
        <p>
          <input type="text" value={pages} name="pages" placeholder="Enter pages" onChange={handleChange}/>
        </p>
        <button type="submit">Save</button>
      </form>
    </div>
  )
}

export default BookForm;