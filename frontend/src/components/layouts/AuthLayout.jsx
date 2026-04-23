import React from 'react'
import bgImage from '../../assets/images/finance_auth_bg.png'
import { Carousel, Typography, Button } from "@material-tailwind/react";
import { CarouselDefault } from './CarouselDefault';

function AuthLayout({children}) {
  return (
    <div className='flex'>
        <div className='w-screen h-screen md:w-[60vw] px-12 pt-8 pb-12'> 
        {children}
        </div>

   
      <div 
        className='hidden md:flex w-[40vw] h-screen bg-cover bg-no-repeat bg-center overflow-hidden p-8 relative flex-col justify-center items-center shadow-[inset_10px_0_30px_rgba(0,0,0,0.1)]'
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className='absolute inset-0 bg-emerald-900/10 backdrop-blur-[2px] z-0'></div>
          <div className='w-4/5 z-10'>
            <CarouselDefault/>
          </div>   
        </div>
    </div>
  )
}

export default AuthLayout;

