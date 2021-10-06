import './UsersTable.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import useUsers from '../../hooks/useUsers';

function UsersTable() {

  /* const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data);
    };

    fetchUsers();
  }, []); */

  const users = useUsers();

  return (
    <table border="1">
      <thead>
        <tr>
          <th>Id</th>
          <th>Username</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {
          users.map(user => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
  )
}

export default UsersTable;