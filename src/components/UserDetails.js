import React from 'react'

function UserDetails({user, handleDelete}) {

  const handleRemove = (id)=> {
    handleDelete(id)
  }
  return (
    <div className="card col-md-4 col-lg-3 col-sm-12">
      <img src={user.image} />
      <h3>{`${user.first_name} ${user.last_name}`}</h3>
      <h5>{`email- ${user.email}`}</h5>
      <h6>{`Gender - ${user.gender}`}</h6>
      <h5>{user.job_title}</h5>

      <button className='btn btn-outline-danger'onClick={()=>handleRemove(user.id)}>remove</button>
    </div>
  );
}

export default UserDetails