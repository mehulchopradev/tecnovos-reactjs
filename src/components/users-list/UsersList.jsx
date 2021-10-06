import './UsersList.css';

import withUsers from '../hocs/withUsers';

function UsersList({ users }) {
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

export default withUsers(UsersList);