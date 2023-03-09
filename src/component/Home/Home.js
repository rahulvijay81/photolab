import React from 'react'
import Activity from '../AddPost/Activity'
import AddPost from '../AddPost/AddPost'
import Header from '../Header/Header'
import Posts from '../Post/Posts'

function Home() {
  return (
    <div>
      <Header/>
      <AddPost/>
      <Activity/>
      <Posts/>
    </div>
  )
}

export default Home