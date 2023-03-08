import React from 'react'
import '../../Style.scss'

function AddPost() {
  return (
    <div className='postParentDiv'>
      <div className='postChildDiv'>
        <div className="profile">
          <h6>User Profile</h6>
          <div className='profileimg'/>
          <h3>rahul vijay</h3>
          <br/>
          <p>share photos to your friends</p>
          <br />
          <button className='imgupload'>Upload</button>
        </div>
      </div>
    </div>
  )
}

export default AddPost