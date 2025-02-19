import { useState } from "react";
import '../Login.css';
import axios from 'axios';
import { useNavigate } from "react-router-dom";

function Login(){

    const navigate = useNavigate()

    const [values,setValues]=useState({
        email:"",
        password:""
    })

    const handleSubmit=(e)=>{
        e.preventDefault()
        axios.post("http://localhost:8000",values)
        .then(res=>{
            alert(res.data.message)
            navigate('/home')
        })
        .catch(err=>{
            console.log(err)
            alert("Invalid email or password")
        })
    }

    return(
      <div className="login-container">
            <h1 className="text-center">Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group mt-3">
            <label>Email</label>
            <input className="form-control" type="email" placeholder="Enter your email" onChange={e=>setValues({...values,email:e.target.value})} required/>
        </div>
        <div className="form-group mt-3">
            <label>Password</label>
            <input className="form-control" type="password" placeholder="Enter your password" onChange={e=>setValues({...values,password:e.target.value})} required/>
        </div>
        <button className="btn btn-primary mt-4">Login</button>
        <div className="mt-4 text-center">
            <p>If you don't have an account <a href="/register">Click here to register</a></p>
        </div>
      </form>
      </div>
    )
  }
  export default Login;