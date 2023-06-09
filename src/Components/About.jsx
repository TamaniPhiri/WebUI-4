// eslint-disable-next-line no-unused-vars
import React from 'react'
import { useRef } from 'react'
import { Player} from '@lottiefiles/react-lottie-player';

const About = () => {

    const ref = useRef(null);
  return (
    <div ref={ref} className='h-screen flex flex-col w-full bg-[#085e57] items-center px-4 md:px-14'>
        <div className=" w-full py-2 text-center pt-10 px-4 md:px-14">
            <h1 className='text-center text-white text-xl md:text-2xl ' id='about'>About Us</h1>
            <p className='text-[#bab9b9] text-sm py-4'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam doloribus earum nostrum ipsam facere beatae iste facilis nemo, alias rem sunt. Perferendis, nesciunt. Sed libero maxime neque assumenda quibusdam?
            </p>
        </div>
        <div className="items-center justify-center w-full md:w-1/2 flex flex-col md:flex-row">
            {/*Hero Animation*/}
            <div className='w-full items-center justify-center z-0'>
                <Player
                    autoplay
                    loop
                    src="https://assets6.lottiefiles.com/packages/lf20_Ophjm9CUsO.json"
                    className='h-full md:h-[120%] w-[100%] object-contain'
                >
                </Player>
            </div>
            <div className='w-full items-center justify-center z-0 flex flex-col'>
                <div className='w-full'>
                    <h1 className='font-bold text-3xl md:text-4xl text-center md:text-left text-white '>Lorem Ipsum</h1>
                </div>
                <div className='w-full'>
                    <p className='text-[#939c9c] mt-4 text-sm md:text-md text-center md:text-left'>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur totam doloribus earum, alias rem sunt. Perferendis, nesciunt. Sed libero maxime neque assumenda quibusdam?
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About