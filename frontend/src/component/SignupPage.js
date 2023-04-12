import React from 'react'
import Form from './Registration'
import image from '../images/signup.jpg'


const SignupPage = () => {
    return (
      <div >
        
        <div className='container text-center'>
        <img src={image} alt="..." class="img-thumbnail" className='img'></img>
        <div className="f"><Form/></div>
         
        </div>
        
        
       
      </div>
    )
  }
  
  
  
  
  
  
export default SignupPage
