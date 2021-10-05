import './BookForm.css';

import { Formik, Form, Field, ErrorMessage } from 'formik';

import * as Yup from 'yup';

import { createBookAsync } from '../../redux/library/library.action';
import { useDispatch } from 'react-redux';

// title required string min(4) max(20)
// pages required number min(1)
// price not required number min(1)
function BookForm() {
  /* const validate = (data) => {
    // if there is no validation error ---> {}
    // if there is a validaton error ---> {'title': 'validation message', 'pages': 'validation message'}

    const { title, price, pages } = data;
    const errorObj = {};

    if (!title) {
      errorObj.title = 'Title is required';
    } else {
      if (title.length < 4 || title.length > 20) {
        errorObj.title = 'Title must be between 4-20';
      }
    }

    if(!pages) {
      errorObj.pages = 'Pages is required';
    } else if (isNaN(parseInt(pages))) {
      errorObj.pages = 'Must be a number'
    }

    return errorObj;
  } */

  const dispatch = useDispatch();

  return (
    <div className='book-form'>
      <h2>Add a new book</h2>
      <Formik
        initialValues={{
          title: '',
          price: '',
          pages: ''
        }}
        onSubmit={(data) => {
          dispatch(createBookAsync(data));
        }}
        validationSchema={Yup.object().shape({
          title: Yup.string().min(4, 'Min length must be 4').max(20, 'Max length must be 20').required('title is required'),
          price: Yup.number().min(1, 'Price must be minimum 1'),
          pages: Yup.number().min(1, 'Pages must be minimum 1').required('Pages is required')
        })}
        /* validate={validate} */
      >
        <Form>
          <p>
            <Field type="text" name="title" placeholder="Enter title"/>
            <ErrorMessage name="title"/>
          </p>
          <p>
            <Field type="text" name="price" placeholder="Enter price"/>
            <ErrorMessage name="price"/>
          </p>
          <p>
            <Field type="text" name="pages" placeholder="Enter pages"/>
            <ErrorMessage name="pages"/>
          </p>
          <button type="submit">Save</button>
        </Form>
      </Formik>
    </div>
  )
}

export default BookForm;