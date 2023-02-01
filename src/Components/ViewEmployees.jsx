import axios from 'axios'
import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'

const ViewEmployees = () => {

  const [employee, setEmployee] = useState([
    {
      Name: "",
      Designation: "",
      Location: "",
      Salary: null,
      Username: "",
      Password: ""

    }
  ])

  useEffect(
    () => {
      fetchEmployee()
    }
  )

  const fetchEmployee = () => {
    axios.get("http://localhost:3001/viewemployees")
      .then(
        (res) => {
          setEmployee(res.data)
        }
      )
      .catch(
        (err) => {
          console.log(err);
        }
      )
  }


  const deleteEmployee = async (id) => {
    let result = await fetch(`http://localhost:3001/viewemployees/${id}`, {
      method: "Delete"
    });
    result = await result.json();
    if (result) {
      alert("Deleted Successfully")
    }
  }




  return (
    <div className="container">
      <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
        <div className="row">
          <Navbar />
          <div className="row g-3 ">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

              <table class="table table-striped table-primary">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Designation</th>
                    <th scope="col">Location</th>
                    <th scope="col">Edit/Delete</th>
                  </tr>
                </thead>

                {
                  employee.map(
                    (value, key) => {
                      return <tbody>
                        <tr>
                          <td>{value.Name}</td>
                          <td>{value.Designation}</td>
                          <td>{value.Location}</td>
                          <td>
                            <Link to={`/update/${value._id}`} className="btn btn-success mx-2">Edit</Link>
                            <button className="btn btn-danger" onClick={() => deleteEmployee(value._id)}>Delete</button></td>
                        </tr>
                      </tbody>

                    }
                  )
                }

              </table>

            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ViewEmployees