import './UsersList.css';

import { useEffect, useState } from 'react';
import axios from 'axios';

import useUsers from '../../hooks/useUsers';

function UsersList() {
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
    <div className='users-list'>
      {
        users.map(user => (
          <div key={user.id}>
            <div>
              {user.id} | {user.username} | {user.email} | {user.phone}
            </div>
            <div>
              Name: {user.name}<br/>
              Website: {user.website}
            </div>
          </div>
        ))
      }
    </div>
  )
}

export default UsersList;