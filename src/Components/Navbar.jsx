// eslint-disable-next-line no-unused-vars
import React from 'react'

const Navbar = () => {

    const services = () => {
        const ref = document.getElementById('services');
        ref?.scrollIntoView({ behavior: 'smooth' });
      };

  return (
    <section className=' pb-16 z-10 sticky' id='navbar'>
        <nav className="fixed top-0 left-0 w-full bg-teal-600 shadow">
            <div className="container px-4 md:px-12 py-4 m-auto flex items-center justify-between">

                {/*LOGO*/}
                <h1 className='font-extrabold font text-[#3c4c4c] cursor-pointer hover:scale-105'>
                    Ula<span className=' italic text-white'>i</span>
                </h1>

                {/*Menu List*/}
                <ul className="hidden md:flex items-center text-white">
                    <li className="hover:text-teal-900 cursor-pointer">Home</li>
                    <li className="pl-6 hover:text-teal-900 cursor-pointer" onClick={services}>Services</li>
                    <li className="pl-6 hover:text-teal-900 cursor-pointer">Pricing</li>
                </ul>

                {/*Menu Button*/}
                <button className='block md:hidden group'>

                    {/*Button*/}
                    <div className="w-5 h-[2px] bg-teal-900 mb-1"></div>
                    <div className="w-5 h-[2px] bg-teal-900 mb-1"></div>
                    <div className="w-5 h-[2px] bg-teal-900 mb-1"></div>

                    {/*List*/}
                    <div className="w-3/4 absolute top-0 -right-full h-screen bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300">
                        <ul>
                            <li className="px-6 py-4 border-b-[1px] hover:bg-teal-300 cursor-pointer">Home</li>
                            <li className="px-6 py-4 border-b-[1px] hover:bg-teal-300 cursor-pointer" onClick={services}>Services</li>
                            <li className="px-6 py-4 border-b-[1px] hover:bg-teal-300 cursor-pointer">Pricing</li>
                        </ul>
                    </div>
                </button>
            </div>
        </nav>
    </section>
  )
}

export default Navbar;