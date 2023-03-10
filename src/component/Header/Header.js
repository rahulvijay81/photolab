import React from 'react'
import '../../Style.scss'
import { useContext } from 'react'
import { AuthContext, FirebaseContext } from '../../store/Context'
import { useNavigate } from 'react-router-dom'

function Header() {
  const { user } = useContext(AuthContext)
  const { firebase } = useContext(FirebaseContext)
  const navigate = useNavigate()

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
          {user && <button onClick={() => {
            firebase.auth().signOut();
            navigate('/login')
          }} className='logoutbutton'>Log Out</button>

          }

        </div>
      </div>
    </div>
  )
}

export default Header