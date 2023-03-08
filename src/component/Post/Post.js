import React from 'react'
import '../../Style.scss'
import {FaUserAlt} from 'react-icons/fa'
import imgcheck from '../../store/Image_created_with_a_mobile_phone.png.webp'

function Post() {
  return (
    <div>
      <div className="postarea">
        <div className="box">
          <h4><FaUserAlt/> Rahul Vijay</h4>
          <div className='postimages'>
            <img src={imgcheck} alt="" />
          </div>
        </div>
        <div className="box"></div>

      </div>
    </div>
  )
}

export default Post