import React from 'react'
import AddPost from '../AddPost/AddPost'
import Header from '../Header/Header'
import Posts from '../Post/Posts'

function Home() {
  return (
    <div>
      <Header/>
      <AddPost/>
      <Posts/>
    </div>
  )
}

export default Home