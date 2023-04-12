import React from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
// import { useNavigate } from "react-router-dom";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
 

  const handleLogin = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email: email,
        password: password
      })
    });

    const data = await response.json();
    console.log(data);
    if(data.user){
     
      window.location.href='/home'
      
    setEmail('')
    setPassword('');
    }
    else{
      
      window.location.href='/register'
      
    }
    
  };

  
  return (
    <div>
      <h3>Login Now </h3>
      <form method="POST" onSubmit={handleLogin} >
        <div className="form-group" >
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="pass" onChange={(e) => setPassword(e.target.value)} />
        </div>
        
        <button type="submit" className="btn btn-primary"  >Login</button>
      </form>
    <Link to="/Register">Create account</Link>

    

    </div>
  )
}

export default Login

