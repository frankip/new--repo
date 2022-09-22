import React, { useState } from "react";
import UserDetails from './UserDetails'
import { users } from "./data";

function UsersList() {
  const [allUsers, setAllUsers] = useState(users);

  const handleRemove = (id) =>{
    console.log(id);
    let updatedUserList = allUsers.filter((user) => user.id !== id)
    setAllUsers(updatedUserList)
  }
  const all = allUsers.map((user)=>{
    return <UserDetails key={user.id} user={user} handleDelete={handleRemove}/>
  });
  // console.log(all);
  return (
    <div className="row">
        <h2 className='align-center'>UsersList</h2>
        <div className='row'>
          {all}
        </div>
    </div>
  )
}

export default UsersList