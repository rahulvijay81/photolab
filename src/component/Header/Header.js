import React from 'react'
import '../../Style.scss'

function Header() {
  return (
    <div className='headerParentDiv'>
      <div className='headerChildDiv'>
        <div className='brandName'>
          Photo Lab
        </div>
        <div className='searcharea'>
          <input
            type="text"
            placeholder='Search for creators,images'
          />
        </div>
        <div className='logout'>
          <button className='logoutbutton'>
            Log Out</button>

        </div>
      </div>
    </div>
  )
}

export default Header