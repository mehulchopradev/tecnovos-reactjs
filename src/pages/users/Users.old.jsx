import './Users.css';
import UsersTable from '../../components/users-table/UsersTable';
import UsersList from '../../components/users-list/UsersList';

import UsersDisplay from '../../components/users-display/UsersDisplay';

function Users() {
  return (
    <>
      <h2>Users display</h2>
      <UsersDisplay render={users => (
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
      )}/>

      <UsersDisplay render={users => (
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
      )}/>
    </>
  )
}

export default Users;