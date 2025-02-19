import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import '../Register.css'

function Register(){

    const navigate=useNavigate()

    const [values,setValues]=useState({
        username:"",
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000/register",values)
        .then(res=>{
            alert("Registerd successfull")
            navigate('/')
        })
        .catch(err=>alert("Register Error"))
    }

    return(
      <div className="register-container">
      <h1 className="text-center">Register</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
            <label>Username</label>
            <input className="form-control" type="name" placeholder="Enter your name" onChange={e=>setValues({...values,username:e.target.value})} required/>
        </div>
        <div className="form-group mt-3">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Enter your email" onChange={e=>setValues({...values,email:e.target.value})} required/>
        </div>
        <div className="form-group mt-3">
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Enter your password" onChange={e=>setValues({...values,password:e.target.value})} required/>
        </div>
        <button className="btn btn-primary mt-4">Register</button>
        <div className="mt-4 text-center">
            <p>Already have an account <a href="/">Click here to login</a></p>
        </div>
      </form>
      </div>
    )
  }
  export default Register;