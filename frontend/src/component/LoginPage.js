import React from 'react'
import Login from '../component/Login'
import image from '../images/login.jpg'
const LoginPage = () => {
  return (
    

<div className='container text-center'>
        <img src={image} alt="..." className=" img" ></img>
        <div className="f"><Login/></div>

      
    </div>
  )
}

export default LoginPage
