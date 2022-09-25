import React, {useState }from 'react'
import { NextId, users } from './data'

function Forms({handleAddUser}) {
    const [firstName, setFirstName] = useState("John")
    const [lastName, setLastName] = useState("Doe")
    const [email, setEmail] = useState("me@email.com")
    const [gender, setGender] = useState("Male")
    const [jobTitle, setJobTitle] = useState("Software Engineer")
    const [image, setImage] = useState(
      "https://robohash.org/delectuseosimpedit.png?size=50x50&set=set1"
    );

    const handleAdduser = (e) => {
        e.preventDefault()
        console.log();
        let currentId = users[users.length - 1].id + 1;
        let formData = {
          id: NextId(),
          image: image,
          first_name: firstName,
          last_name: lastName,
          email: email,
          gender: gender,
          job_title: jobTitle,
        };
        handleAddUser(formData)
        resetForm()
    }

    const resetForm = () => {
      setFirstName("")
      setLastName("")
      setEmail("")
      setGender("")
      setJobTitle("")
      setImage("")
    }

  return (
    <div>
      <h2>forms</h2>
      <form>
        <div className="col-md-6">
          <label htmlFor="inputFirstName" className="form-label">
            First Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputFirstName"
            placeholder={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputLastName" className="form-label">
            Last Name
          </label>
          <input
            type="text"
            className="form-control"
            id="inputLastName"
            placeholder={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="col-8">
          <label htmlFor="inputEmail" className="form-label">
            email
          </label>
          <input
            type="email"
            className="form-control"
            id="inputEmail"
            placeholder={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <div className="col-md-4">
            <label htmlFor="inputGender" className="form-label">
              Gender
            </label>
            <select
              id="inputGender"
              className="form-select"
              onChange={(e) => setGender(e.target.value)}
            >
              <option selected>Choose...</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
        </div>
        <div className="col-12">
          <label htmlFor="inputImage" className="form-label">
            image
          </label>
          <input
            type="file"
            className="form-control"
            id="inputImage"
            onChange={(e) => setImage(e.target.value)}
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="inputJobDescription" className="form-label">
            Job Title
          </label>
          <input
            type="text"
            className="form-control"
            id="inputJobTitle"
            placeholder={jobTitle}
            onChange={(e) => setJobTitle(e.target.value)}
          />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary" onClick={handleAdduser}>
            Add user
          </button>
        </div>
      </form>
    </div>
  );
}

export default Forms