// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRef } from 'react'

const About = () => {

    const ref = useRef(null);
  return (
    <div ref={ref} className='h-screen flex w-full'>
        <div className=" bg-[#085e57] items-center justify-center w-full rounded-md py-2 text-center pt-10 px-4 md:px-14">
            <h1 className='text-center text-white text-xl md:text-2xl ' id='about'>About Us</h1>
            <p className='text-[#bab9b9] text-sm py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam doloribus earum nostrum ipsam facere beatae iste facilis nemo, alias rem sunt. Perferendis, nesciunt. Sed libero maxime neque assumenda quibusdam?
            </p>
        </div>
    </div>
  )
}

export default About