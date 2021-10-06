import { useEffect, useState } from 'react';
import axios from 'axios';


function withUsers(LowerOrderComponent) {
  return function WithUsersDisplay() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      const fetchUsers = async () => {
        const { data } = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(data);
      };

      fetchUsers();
    }, []);

    return <LowerOrderComponent users={users}/>
  }
}

export default withUsers;