import React from 'react'
import Layout from '../components/Layout/Layout'
import museo3 from '../images/museo3.jpg'
import '../styles/HomeStyles.css'

const Home = () => {
  return (
    <Layout>
      <div className='home' style={{backgroundImage:  `url(${museo3})`}}>
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