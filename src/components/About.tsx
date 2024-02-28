import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const About = (): ReactNode => {
  return (
    <div>
      <h2>About</h2>
      <p>About Us</p>
      <Link to="/">Go to Home</Link>
    </div>
  )
}

export default About
