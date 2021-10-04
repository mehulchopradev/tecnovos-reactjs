import './BookList.css';

import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

function BookList(props) {
  const books = useSelector(rootState => rootState.libraryReducer.books);

  return (
    <div className='book-list'>
      <table border="1">
        <thead>
          <tr>
            <th>Book Id</th>
            <th>Title</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            books.map(book => (
              <tr key={book.id}>
                <td>{book.id}</td>
                <td>{book.title}</td>
                <td>
                  <Link to={`/library/book-details/${book.id}`}>Details</Link>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  )
}

export default BookList;