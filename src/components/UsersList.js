import React, { useState } from "react";
import UserDetails from './UserDetails'
import { users } from "./data";
import Forms from "./Forms";

function UsersList() {
  const [allUsers, setAllUsers] = useState(users);

  const handleRemove = (id) =>{
    console.log(id);
    let updatedUserList = allUsers.filter((user) => user.id !== id)
    setAllUsers(updatedUserList)
  }
  const handleAddUser = (data) => {
    console.log('userlist called', data);
    const updatedusers = [...allUsers, data]
    users.push(data)
    setAllUsers(updatedusers)
  }
  const all = allUsers.map((user)=>{
    return <UserDetails key={user.id} user={user} handleDelete={handleRemove}/>
  });
  // console.log(all);
  return (
    <div className="row">
      <div>
        <h2 className="text-center">UsersList</h2>
      </div>
      <div className="row col-lg-8 col-md-8">{all}</div>
      <div className="row g-3">
        <Forms handleAddUser={handleAddUser} />
      </div>
    </div>
  );
}

export default UsersList