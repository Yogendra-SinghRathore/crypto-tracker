import React from 'react'
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex justify-center w-[1580px] bg-black rounded-2xl p-2.5'>
        <nav className='text-white p-4 flex gap-20 max-w-screen-xl'>
            <h1 className='text-2xl font-bold'>Crypto Tracker</h1>
            <div className="space-x-6 ml-5">
                <NavLink to={"/"}>Home</NavLink>  
                <NavLink to={"/favorites"}>Favorites</NavLink>
            </div>
        </nav>
    </div>
  )
}

export default Navbar;
