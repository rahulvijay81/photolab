import React from 'react'
import Header from '../Header/Header'
import Posts from '../Post/Posts'
import Sidebar from '../Sidebar/Sidebar'

function Home() {
  return (
    <div>
      <Header />
      <Sidebar />
      <Posts />
    </div>
  )
}

export default Home