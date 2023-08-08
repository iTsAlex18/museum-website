import React from 'react'
import Layout from '../components/Layout/Layout'
import museo4 from '../images/Cananea4.jpeg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:  `url(${museo4})`}}>
        <div className='headerContainer'>
          <h1 style={{textAlign:"center"}}>Museo de la Lucha Obrera.</h1> 
          <br />
          <br />
          <h2 style={{textAlign:"center"}}>Cananea 1906.</h2>
        </div>
      </div>
    </Layout>
  )
}

export default Home