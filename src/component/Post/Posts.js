import React from 'react'
import { useState, useContext, useEffect } from 'react'
import { FirebaseContext } from '../../store/Context'
import { PostContext } from '../../store/PostContext'
import { useNavigate } from 'react-router-dom'
import AddPost from '../../component/AddPost/AddPost'
import '../../Style.scss'


function Post() {
  const [show, setShow] = useState(false)
  const [products, setProducts] = useState([])
  const { firebase } = useContext(FirebaseContext)
  const { setPostDetails } = useContext(PostContext)
  const navigate = useNavigate()

  useEffect(() => {
    firebase.firestore().collection('products').get().then((snapshot) => {
      const allPost = snapshot.docs.map((product, id) => {
        return {
          ...product.data(),
          id: product.id
        }
      })
      setProducts(allPost)
    })
  })

  return (
    <div>
      <div className="postarea">
        <button className='upload-btn'
          onClick={() => setShow(!show)}>
          {show ? "cancel" : "upload"}
        </button>
        {show && <AddPost />}
        <div className="box">
          {products.map(product => {
            return <div className='postimages' key={product.id}
              onClick={() => {
                setPostDetails(product)
                navigate('/home')
              }}>
              <img key={product.id} src={product.url} alt="" />
            </div>
          })
          }
        </div>
      </div>
    </div>
  );
}

export default Post