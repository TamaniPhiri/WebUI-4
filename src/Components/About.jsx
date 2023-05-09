// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRef } from 'react'

const About = () => {

    const home=useRef(null);
  return (
    <div ref={home} id='about' className='h-screen flex'>
        <div>
            <h1>About Us</h1>
        </div>
    </div>
  )
}

export default About