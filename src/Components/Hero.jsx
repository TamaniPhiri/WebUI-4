/* eslint-disable no-unused-vars */
import React from 'react'
import { Player} from '@lottiefiles/react-lottie-player';
import { BsCheck2All } from "react-icons/bs";

const Hero = () => {
  return (
    <section className="flex w-full h-screen md:h-fit mt-20 md:mt-20 flex-col-reverse md:flex-row items-center justify-center px-4 md:px-14 container" id='home'>
        <div className="w-full md:w-1/2">

            {/*Upper Text*/}
            <div>
                <h1 className=' text-[#3c4c4c] font-bold text-3xl md:text-4xl text-center md:text-left'>Lorem Ipsum Dolor</h1>
                <p className='text-[#939c9c] mt-4 text-sm md:text-lg text-center md:text-left'>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non excepturi dolores corrupti adipisci, ab neque natus hic explicabo commodi!
                </p>
            </div>

            {/*Buttons*/}

            <div className="items-center flex-row w-full flex mx-auto py-6 space-x-4">
                <div className="bg-[#085e57] items-center justify-center w-full md:w-60 rounded-md py-2 text-center">
                    <a href="#" className=' px-4 text-white'>Get Started</a>
                </div>
                <div className="hidden md:block shadow-md items-center justify-center w-60 rounded-md py-2 mx-0 md:mx-4 text-center">
                    <a href="#" className=' px-4 text-[#085e57]'>Contact Us</a>
                </div>
            </div>

            {/*Options 1*/}
            <div className='flex-row flex items-center w-full py-2'>
                <div className='w-1/2 flex flex-row items-center'>
                    <BsCheck2All className='text-[#085e57] text-lg '/>
                    <p className='pl-2 text-[10px] md:text-[12px] pr-1'>
                        Fast Reliable Delivery
                    </p>
                </div>
                <div className='w-1/2 flex flex-row items-center'>
                    <BsCheck2All className='text-[#085e57] text-lg '/>
                    <p className='pl-2 text-[10px] md:text-[12px]'>
                        Flexible Scheduling
                    </p>
                </div>
            </div>

            {/*Options 2*/}
            <div className='flex-row flex items-center w-full py-2 mb-4'>
                <div className='w-1/2 flex flex-row items-center'>
                    <BsCheck2All className='text-[#085e57] text-lg '/>
                    <p className='pl-2 text-[10px] md:text-[12px] pr-1'>
                        Same Day Delivery
                    </p>
                </div>
                <div className='w-1/2 flex flex-row items-center'>
                    <BsCheck2All className='text-[#085e57] text-lg '/>
                    <p className='pl-2 text-[10px] md:text-[12px]'>
                        Support and Tracking
                    </p>
                </div>
            </div>
        </div>

        {/*Hero Animation*/}
        <div className='w-full md:w-1/2 items-center justify-center z-0'>
            <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/packages/lf20_k0sUtnckyH.json"
                className='h-full md:h-[100%] w-[100%] object-contain'
            >
            </Player>
        </div>
    </section>
  )
}

export default Hero