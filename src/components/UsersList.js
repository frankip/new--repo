import React, { useState } from "react";
import UserDetails from './UserDetails'
import { users } from "./data";

function UsersList() {
  const [allUsers, setAllUsers] = useState(users);

  console.log("all", allUsers);
  return (
    <div>
        <h3>UsersList</h3>

        <UserDetails/>
    </div>
  )
}

export default UsersList