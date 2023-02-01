import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const Login = () => {

    let Navigate = useNavigate()

    const [Data, setData] = useState([
        {
            Username: "",
            Password: ""
        }
    ])


    const inputHandler = (event) => {
        const { name, value } = event.target

        setData(
            (previousState) => ({
                ...previousState,
                [name]: value
            })
        )
    }



    const readValues = () => {
        axios.post("http://localhost:3001",Data)
        .then(
            (res)=>{
                // console.log(res.data.length)

                if(Data.Username==="admin"&& Data.Password==="admin@123"){
                    // alert("Admin Login")
                    Navigate("/viewemployees")
                }

                if(res.data.Data.length===1){
                    let userid = res.data.Data[0]._id
                    let username =res.data.Data[0].Name

                    // console.log(userid)
                    sessionStorage.setItem("userid",userid)
                    sessionStorage.setItem("Name",username)
                    // alert("Successfully Loged In")
                    Navigate("/employee")

                    setData(
                        {
                            Username:"",
                            Password:""
                        }
                    )
                }else{
                    alert("Invalid Login")
                }
            }

        )
        .catch()

    }

    




    return (
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="container" style={{ marginTop: "150px" }}>
                        <div className="row g-3">
                            <h2>Login Form</h2>
                            <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">User Name</label>
                                    <input type="text" 
                                    name="Username" 
                                    placeholder='Username' 
                                    className="form-control"
                                    onChange={inputHandler}
                                    value={Data.Username} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <label htmlFor="" className="form-label">Password</label>
                                    <input type="password" 
                                    name="Password"
                                    placeholder='Password' 
                                    className="form-control"
                                    onChange={inputHandler}
                                    value={Data.Password} />
                                </div>
                                <div className="col col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6">
                                    <button className="btn btn-primary" onClick={readValues}>LogIn</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login