import React, { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

import UserDetails from './UserDetails'
import { users } from "./data";
import Forms from "./Forms";

function UsersList() {
  const itemsPerPage=4;

  const [allUsers, setAllUsers] = useState(users);

  // We start with an empty list of items.
  const [currentItems, setCurrentItems] = useState(null);
  const [pageCount, setPageCount] = useState(0);
  // Here we use item offsets; we could also use page offsets
  // following the API or data you're working with.
  const [itemOffset, setItemOffset] = useState(0);

    useEffect(() => {
      // Fetch items from another resources.
      const endOffset = itemOffset + itemsPerPage;
      console.log(`Loading items from ${itemOffset} to ${endOffset}`);
      setCurrentItems(allUsers.slice(itemOffset, endOffset));
      setPageCount(Math.ceil(allUsers.length / itemsPerPage));
    }, [itemOffset, itemsPerPage]);


  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allUsers.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  const handleRemove = (id) => {
    console.log(id);
    let updatedUserList = allUsers.filter((user) => user.id !== id);
    setAllUsers(updatedUserList);
  };
  const handleAddUser = (data) => {
    console.log("userlist called", data);
    const updatedusers = [...allUsers, data];
    users.push(data);
    setAllUsers(updatedusers);
  };
  const all = allUsers.map((user) => {
    return (
      <UserDetails key={user.id} user={user} handleDelete={handleRemove} />
    );
  });
  // console.log(all);
  return (
    <div className="row">
      <div>
        <h2 className="text-center">UsersList</h2>
      </div>
      <div className="row col-lg-8 col-md-8">
        {all}
        <ReactPaginate
          breakLabel="..."
          nextLabel="next >"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={pageCount}
          previousLabel="< previous"
          renderOnZeroPageCount={null}
        />
      </div>
      <div className="row g-3">
        <Forms handleAddUser={handleAddUser} />
      </div>
    </div>
  );
}

export default UsersList