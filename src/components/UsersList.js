import React, { useState } from "react";
import UserDetails from './UserDetails'
import { users } from "./data";

function UsersList() {
  const [allUsers, setAllUsers] = useState(users);

  const all = allUsers.map((user)=>{
    return <UserDetails user={user}/>
  });
  // console.log(all);
  return (
    <div>
        <h3>UsersList</h3>
        {all}
    </div>
  )
}

export default UsersList