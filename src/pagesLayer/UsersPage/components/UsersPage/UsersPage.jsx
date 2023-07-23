import React, { useEffect, useState } from 'react'
import { fetchUsers } from '../../api/fetchUsers'

const UsersPage = () => {
  const [users, setUsers] = useState([])
  const [searchUser, setSearchUser] = useState('')

  useEffect(() => {
    fetchUsers().then((res) => {
      setUsers(res)
    })
  }, [searchUser])

  return (
    <div>
      <div>
        <input value={searchUser} type='search' onChange={(e) => setSearchUser(e.target.value)} />
      </div>
      {users.filter((val) => {
        if (searchUser === val) {
          return val;
        } else if (val.name.toLowerCase().includes(searchUser.toLowerCase())) {
          return val;
        }
      }).map((item) => (
        <div key={item.id}>
            {item.name}
          </div>))}
    </div>
  )
}

export default UsersPage