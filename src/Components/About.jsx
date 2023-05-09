// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRef } from 'react'

const About = () => {

    const home=useRef(null);
  return (
    <div ref={home} id='about' className='h-screen'>
        About Us bro
    </div>
  )
}

export default About