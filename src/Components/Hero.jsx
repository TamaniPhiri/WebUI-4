/* eslint-disable no-unused-vars */
import React from 'react'
import { useRef } from 'react'
import { Player, Controls } from '@lottiefiles/react-lottie-player';

const Hero = () => {
    const ref=useRef(null);
  return (
    <section className="flex w-full h-screen md:h-fit mt-20 md:mt-20 flex-col-reverse md:flex-row items-center justify-center">
        <div className="w-full md:w-1/2">
            <h1 className=' text-[#3c4c4c] font-bold text-3xl md:text-5xl'>Find a job that suits your passion</h1>
            <p className='text-[#939c9c] mt-4 text-sm md:text-lg'>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi dolores corrupti adipisci, ab neque natus hic explicabo commodi!
            </p>
            <div className=" bg-[#085e57] items-center justify-center w-fit rounded-md py-2 mt-4">
                <a href="#" className=' px-4 text-white'>Get Started</a>
            </div>
        </div>
        <div className='w-full md:w-1/2 items-center justify-center z-0'ref={ref}>
            <Player
                autoplay
                loop
                src="https://assets2.lottiefiles.com/packages/lf20_0pivjQFVZl.json"
                className='h-full md:h-[100%] w-[100%] object-cover'
            >
            </Player>
        </div>
    </section>
  )
}

export default Hero