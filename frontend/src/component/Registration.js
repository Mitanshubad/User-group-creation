import React, { useState } from 'react';
import { Link } from 'react-router-dom'
 
const Registration = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [cpassword, setCPassword] = useState('');
  const [name,setName] = useState('');

  const handleRegister = async (event) => {
    event.preventDefault();

    const response = await fetch('http://localhost:8000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name:name,
        email: email,
        password: password,
        cpassword: cpassword
      })
    });

    const data = await response.json();
    console.log(data);
    if(data){
      alert("registration successfull")
      setCPassword('');
    setEmail('')
    setPassword('');
    setName('');
    }
    
  };

  return (
    <div>
      <h3>Create Account</h3>
      <form method="POST" onSubmit={handleRegister}>
      <div className="form-group" >
          <label htmlFor="exampleInputEmail1">Name</label>
          <input type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setName(e.target.value)} />
        </div>
        <div className="form-group" >
          <label htmlFor="exampleInputEmail1">Email </label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" name="pass" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Confirm password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Confirm Password" name="cpass" onChange={(e) => setCPassword(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" >Submit</button>
      </form>
      <Link to="/">already have an account</Link>
    </div>
  );
}

export default Registration;
