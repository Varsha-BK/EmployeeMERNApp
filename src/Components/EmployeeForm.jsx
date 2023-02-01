import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const EmployeeForm = () => {
    const Navigate= useNavigate()

    const [employee,setEmployee] = useState(
        {
            Name : "",
            Designation : "",
            Location : "",
            Salary : null,
            Username : "",
            Password : ""
       
        }
    )

    const inputHandler = (event) => {
        const { name, value } = event.target

        setEmployee(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }

    const employeedata = ()=>{
        console.log(employee);
        axios.post("http://localhost:3001/employeeform",employee)
        .then(
            (res)=>{
                console.log(res.data);
                if(res.data.Status=== "Success"){
                    alert("Registered Successfully")
                    setEmployee(
                        {
                            Name : "",
                            Designation : "",
                            Location : "",
                            Salary : "",
                            Username : "",
                            Password : ""
                
                        }
                    )
                    Navigate("/viewemployees")
                }
            }
        )
        .catch(
            (err)=>{
                console.log(err);
            }
        )
    }




    return (
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row">
                        <Navbar />
                        <div className="row g-3">
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 ">
                                <div className="container">
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <h2 style={{ textAlign: "center" }}>Employee Form</h2>
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text" 
                                        name="Name" 
                                        placeholder='Enter Your Name' 
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={employee.Name}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Designation</label>
                                        <input type="text" 
                                        name="Designation" 
                                        placeholder='Enter Your Designation' 
                                        className="form-control" 
                                        onChange={inputHandler}
                                        value={employee.Designation}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Location</label>
                                        <input type="text" 
                                        name="Location" 
                                        placeholder='Enter Your Location' 
                                        className="form-control" 
                                        onChange={inputHandler}
                                        value={employee.Location}/>
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Salary</label>
                                        <input type="text" 
                                        name="Salary" 
                                        placeholder='Enter Your Salary' 
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={employee.Salary} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text" 
                                        name="Username" 
                                        placeholder='Enter Your Username' 
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={employee.Username} />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password" 
                                        name="Password" 
                                        placeholder='Enter Your Password' 
                                        className="form-control"
                                        onChange={inputHandler}
                                        value={employee.Password} />
                                    </div>

                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-primary" onClick={employeedata}>Submit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EmployeeForm