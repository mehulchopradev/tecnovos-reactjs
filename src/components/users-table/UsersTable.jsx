import './UsersTable.css';

import withUsers from '../hocs/withUsers';

function UsersTable({ users }) {
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

export default withUsers(UsersTable);