import React from 'react'
import Activity from '../AddPost/Activity'
import AddPost from '../AddPost/AddPost'
import Header from '../Header/Header'
import Post from '../Post/Post'

function Home() {
  return (
    <div>
      <Header/>
      <AddPost/>
      <Activity/>
      <Post/>
    </div>
  )
}

export default Home