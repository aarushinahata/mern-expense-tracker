import React, { useState } from 'react'
import {HiOutlineMenu, HiOutlineX} from "react-icons/hi"
import SideMenu from './SideMenu';

const Navbar = ({activeMenu}) => {
    const [openSideMenu, setOpenSideMenu] = useState(false);
  return (
    
    <div className='flex gap-5 bg-white/80 border-b border-slate-200/50 backdrop-blur-xl py-4 px-7 sticky top-0 z-30 shadow-sm'>
        <button className='block lg:hidden text-slate-800 focus:outline-none transition-transform hover:scale-105'
        onClick={()=> {
            setOpenSideMenu(!openSideMenu);
        }}>
            {openSideMenu? (
                <HiOutlineX className='text-2xl text-emerald-600'/>
            ) : (
                <HiOutlineMenu className='text-2xl text-emerald-600'/>
            )}
        </button>
        <h2 className='text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent tracking-tight'>Expense tracker</h2>
        {openSideMenu && (
            <div className='fixed top-[60px] -ml-4 bg-white/95 backdrop-blur-xl shadow-2xl h-screen z-50'>
                <SideMenu activeMenu={activeMenu}/>
            </div>
        )}
    </div>
  )
}

export default Navbar