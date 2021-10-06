import { useEffect, useState } from 'react';
import axios from 'axios';

function UsersDisplay({ render }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return render(users);
}

export default UsersDisplay;