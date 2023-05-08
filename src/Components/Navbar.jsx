// eslint-disable-next-line no-unused-vars
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 w-full bg-orange-400 shadow">
            <div className="container px-4 md:px-12 py-4 m-auto flex items-center justify-between">
                <h1 className='font-extrabold font text-orange-900 cursor-pointer hover:scale-105'>
                    Ula<span className=' italic text-white'>i</span>
                </h1>
                <ul className="hidden md:flex items-center text-white">
                    <li className="hover:text-orange-900 cursor-pointer">Home</li>
                    <li className="pl-6 hover:text-orange-900 cursor-pointer">Services</li>
                    <li className="pl-6 hover:text-orange-900 cursor-pointer">Pricing</li>
                </ul>
                <button className='block md:hidden'>
                    <div className="w-5 h-[2px] bg-orange-900 mb-1"></div>
                    <div className="w-5 h-[2px] bg-orange-900 mb-1"></div>
                    <div className="w-5 h-[2px] bg-orange-900 mb-1"></div>
                    <div className=" w-3/4 absolute top-0 right-0 h-screen bg-white border">
                        <ul>
                            <li className="px-6 py-4 border-b-[1px] hover:text-orange-900 cursor-pointer">Home</li>
                            <li className="px-6 py-4 border-b-[1px] hover:text-orange-900 cursor-pointer">Services</li>
                            <li className="px-6 py-4 border-b-[1px] hover:text-orange-900 cursor-pointer">Pricing</li>
                        </ul>
                    </div>
                </button>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;