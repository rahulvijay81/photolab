import React from 'react'
import '../../Style.scss'
import { FcGoogle } from 'react-icons/fc';

function Login() {
  return (
    <div className='bg-login'>
      <div className='flex-container'>
        <div className="flexbox1">
          <div className="loginimage" />
        </div>
        <div className="flexbox2">
          <div className='login-box'>
            <label htmlFor="lname">E-mail</label>
            <br />
            <input className='input'
              type="email"
              id="lname"
            />
            <br />
            <label htmlFor="lname">Password</label>
            <br />
            <input className='input'
              type="password"
              id="lname"
            />
            <br />
            <br />
            <button className='login-btn'>Login</button>
            <p>or</p>
            <button className='signup-btn'>
            <FcGoogle 
            className='icon'
            /> 
            Sign-in with google</button>
            <br />
            <br />
            <p className='create-btn'>Don't have an account?<span> Sign Up</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login