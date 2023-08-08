import React from 'react'
import Layout from '../components/Layout/Layout'
import museo4 from '../images/Cananea4.jpeg'

const Pagenotfound = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:  `url(${museo4})`}}>
        <div className='headerContainer'>
        <h1 style={{textAlign:"center"}}>Page not Found</h1>
        <h1 style={{textAlign:"center"}}>404</h1>
        </div>
      </div>
    </Layout>
  )
}

export default Pagenotfound