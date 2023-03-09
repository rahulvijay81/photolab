import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './component/Home/Home';
import Login from './component/Login/Login';
import './App.scss'
import Signup from './component/SignUp/Signup';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
      </Router>

    </div>
  );
}

export default App;
