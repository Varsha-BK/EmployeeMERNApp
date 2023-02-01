import axios from 'axios'
import React, { useEffect, useState } from 'react'
import NavbarEmp from './NavbarEmp'

const Employee = () => {

    const [employee, setEmployee] = useState([])

    useEffect(
        () => {
            fetchEmployee()
        }
    )


    const fetchEmployee = () => {
        axios.get("http://localhost:3001/employee")
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

    return (
        <div className="container">
            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div className="row">
                    <NavbarEmp/>
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">

                            <table class="table table-striped table-primary">
                                <thead>
                                    <tr>
                                        <th scope="col">Name</th>
                                        <th scope="col">Designation</th>
                                        <th scope="col">Location</th>
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

export default Employee