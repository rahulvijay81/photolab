import React from 'react'
import '../../Style.scss'
// import { useState, useContext, useEffect } from 'react'
// import { FirebaseContext } from '../../store/Context'
// import { PostContext } from '../../store/PostContext'
// import { useNavigate } from 'react-router-dom'
import imgcheck from '../../store/Image_created_with_a_mobile_phone.png.webp'

function Post() {
  return (
    <div>
      <div className="postarea">
        <div className="box">
          <div className='postimages'>
            <img src={imgcheck} alt="" />
            <p>Post by Rahul Vijay</p>
            <p>04/03/2023</p>
          </div>
        </div>

        <div className="box"></div>

      </div>
    </div>
  )
}

export default Post