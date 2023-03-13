import React from 'react'
import '../../Style.scss'
import { FcGoogle } from 'react-icons/fc';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  const handleLogin = (e) => {
    e.preventDefault()
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate("/")
    }).catch((Error) => {
      alert(Error.message)
    })
  }

  return (
    <div className='bg-login'>
      <div className='flex-container'>
        <div className="flexbox1">
          <div className="loginimage" />
        </div>
        <div className="flexbox2">
          <div className='login-box'>
            <form onSubmit={handleLogin}>
              <label htmlFor="lname">E-mail</label>
              <br />
              <input className='input'
                type="email"
                id="lname"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <br />
              <label htmlFor="lname">Password</label>
              <br />
              <input className='input'
                type="password"
                id="lname"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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
              <p className='create-btn'>Don't have an account?<span
                onClick={() => {
                  navigate("/signup")
                }}
              > Sign Up</span></p>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login