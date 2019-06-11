import React from 'react'
import Header from '../common/Header'
import imgPlaceholder from '../../assets/images/placeholder.png'

const About = () => (
  <div>
    <Header />
    <h1>About Page</h1>
    <p>Did you get here via Redux?</p>
    <img src={imgPlaceholder} alt="placeholder" height="300px" />
  </div>
)

export default About
