// eslint-disable-next-line no-unused-vars
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 w-full bg-orange-400 shadow">
            <div className="container m-auto flex items-center justify-between">
                <h1 className='pl-8 py-4 font-extrabold font text-orange-900'>
                    Ula<span className=' italic text-white'>i</span>
                </h1>
                <ul className="hidden md:flex items-center pr-10 text-white">
                    <li className=" py-4 px-6 ">Home</li>
                    <li className=" py-4 px-6">Services</li>
                    <li className=" py-4 px-6">Pricing</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;