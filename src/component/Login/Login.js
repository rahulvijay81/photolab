import React, { useEffect } from 'react'
import { FcGoogle } from 'react-icons/fc';
import { useState, useContext } from 'react';
import { FirebaseContext } from '../../store/Context';
import { useNavigate } from 'react-router-dom';
import { auth, provider } from '../../firebase/Config'
import { signInWithPopup } from 'firebase/auth';
import '../../Style.scss'


function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [value, setValue] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const { firebase } = useContext(FirebaseContext)

  const handleLogin = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('please enter your email and password');
      return;
    }
    firebase.auth().signInWithEmailAndPassword(email, password).then(() => {
      navigate("/home")
    }).catch((Error) => {
      alert(Error.message)
    })
  }

  const handleClick = () => {
    signInWithPopup(auth, provider).then((data) => {
      setValue(data.user.email)
      localStorage.setItem(email, data.user.email)
      navigate("/home")
    }).catch((error) => {
      alert(error.message)
    })
  }

  useEffect(() => {
    setValue(localStorage.getItem('email'))
  }, [])

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
              {error && <p style={{ color: 'red' }}>{error}</p>}
              <br />
              <button className='login-btn'>Login</button>
              <p>or</p>
              {value ? value :
                <button
                  onClick={handleClick}
                  className='signup-btn'>
                  <FcGoogle
                    className='icon'
                  />
                  Sign-in with google</button>
              }
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