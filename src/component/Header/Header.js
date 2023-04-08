import React from 'react'
import { useContext } from 'react'
import { AuthContext, FirebaseContext } from '../../store/Context'
import { useNavigate } from 'react-router-dom'
 import '../../Style.scss'

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
        
        <div className='logout'>
          {user && <button onClick={() => {
            firebase.auth().signOut();
            navigate('/')
          }} className='logoutbutton'>Log Out</button>

          }

        </div>
      </div>
    </div>
  )
}

export default Header