import React from 'react'
import { useEffect, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthContext, FirebaseContext } from './store/Context';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import Post from './store/PostContext';
import Signup from './component/SignUp/Signup';
import './App.scss'

function App() {
  const { setUser } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setUser(user)
    })
  },)

  return (
    <div>
      <Post>
        <Router>
          <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/signup' element={<Signup />} />
            <Route path='/' element={<Home />} />
          </Routes>
        </Router>
      </Post>
    </div>
  );
}

export default App;
