import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams ,useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

const EmpEdit = () => {

    const [edit, setEdit] = useState(
        {
            Name: "",
            Designation: "",
            Location: "",
            Salary: null,
            Username: "",
            Password: ""
        }
    )
    const Navigate = useNavigate()
    const { id } = useParams()
    const [msg, setMsg] = useState("")

    useEffect(() => {
        const fetchdetails = async () => {
            const reqdata = await fetch(`http://localhost:3001/viewemployees/${id}`)
            const res = reqdata.json()
            setEdit(await res)
        }
        fetchdetails()
    }, [])

    const inputHandler = (event) => {
        const { name, value } = event.target

        setEdit(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }


    const update = async (e) => {
        e.preventDefault()
        await axios.post(`http://localhost:3001/update/${id}`, edit)
            .then(
                (res) => {
                    alert("Update Successfully")
                    setMsg(res.data.msg)
                    Navigate("/viewemployees")
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
                                        <h2 style={{ textAlign: "center" }}>Edit Employee</h2>
                                        <label htmlFor="" className="form-label">Name</label>
                                        <input type="text"
                                            name="Name"
                                            placeholder='Enter Your Name'
                                            className="form-control"
                                            value={edit.Name}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Designation</label>
                                        <input type="text"
                                            name="Designation"
                                            placeholder='Enter Your Designation'
                                            className="form-control"
                                            value={edit.Designation}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Location</label>
                                        <input type="text"
                                            name="Location"
                                            placeholder='Enter Your Location'
                                            className="form-control"
                                            value={edit.Location}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Salary</label>
                                        <input type="text"
                                            name="Salary"
                                            placeholder='Enter Your Salary'
                                            className="form-control"
                                            value={edit.Salary}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Username</label>
                                        <input type="text"
                                            name="Username"
                                            placeholder='Enter Your Username'
                                            className="form-control"
                                            value={edit.Username}
                                            onChange={inputHandler}
                                        />
                                    </div>
                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <label htmlFor="" className="form-label">Password</label>
                                        <input type="password"
                                            name="Password"
                                            placeholder='Enter Your Password'
                                            className="form-control"
                                            value={edit.Password}
                                            onChange={inputHandler}
                                        />
                                    </div>

                                    <div className="col col-12 col-sm-12 col- md-12 col-lg-6 col-xl-6 col-xxl-6">
                                        <button className="btn btn-primary" onClick={update}>Submit</button>
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

export default EmpEdit