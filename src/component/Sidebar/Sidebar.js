import React from 'react'
import { NavLink } from 'react-router-dom'
import '../../Style.scss'


function Sidebar() {
  return (
    <div className="sidebar">
        <NavLink>Home</NavLink>
    </div>
  )
}

export default Sidebar