// eslint-disable-next-line no-unused-vars
import React from 'react'


const Navbar = () => {
  return (
    <div>
        <nav className="fixed top-0 left-0 w-full bg-orange-400 shadow">
            <div className="container m-auto flex items-center justify-between">
                <h1 className='pl-8 py-4'>
                    Ula<span>i</span>
                </h1>
                <ul className="flex items-center">
                    <li className="text-lg">Home</li>
                    <li>Services</li>
                    <li>Pricing</li>
                </ul>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;