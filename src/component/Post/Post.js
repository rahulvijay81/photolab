import React from 'react'
import '../../Style.scss'
import imgcheck from '../../store/Image_created_with_a_mobile_phone.png.webp'

function Post() {
  return (
    <div>
      <div className="postarea">
        <div className="box">
          <div className='postimages'>
            <img src={imgcheck} alt="" />
            <p>Upload by Rahul Vijay</p>
          </div>
        </div>
        

        <div className="box"></div>

      </div>
    </div>
  )
}

export default Post