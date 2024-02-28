import React from 'react'
import { Link } from 'react-router-dom'

const Home = (): React.ReactNode => {
  return (
    <>
      <h2>Home</h2>
      <p>Welcome to home page</p>
      <Link to="/about">Go to About</Link>
    </>
  )
}

export default Home
