import React from 'react'
import '../../Style.scss'
import { Fragment, useState, useContext } from 'react'
import { FirebaseContext, AuthContext } from '../../store/Context'


function AddPost() {
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const [image, setImage] = useState(null)
  const date = new Date()

  const handleSubmit = () => {
    firebase.storage().ref(`/image/${image.name}`)
      .put(image).then(({ ref }) => {
        ref.getDownloadURL().then((url) => {
          console.log(url);
          firebase.firestore().collection('products').add({
            url,
            userId: user.uid,
            createAt: date.toDateString()
          })
          alert('uploaded')
        })
      })
  }

  return (
    <Fragment>
      <div className='postParentDiv'>
        <div className='postChildDiv'>
          <div className="profile">
            <h6>Upload Images</h6>
            <br />
            <p>share photos to your friends</p>
            <br />
            <input onChange={(e) => {
              setImage(e.target.files[0])
            }} type="file" />
            <br />
            <button onClick={handleSubmit} className='imgupload'>Upload</button>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default AddPost