import React, { useState, useEffect } from 'react';


function Navbar({children, className, isSearchInNavbar}) {
    return (
        <div className={`w-full h-[70px] bg-black bg-opacity-[90%] backdrop-blur-[10px] flex flex-row justify-between items-center fixed top-0 left-0 px-8 ${className}`}>
            <div className={`w-auto h-[40px] ${isSearchInNavbar ? 'hidden  lg:block' : 'block'}`}>
                <img src='./logo.png' alt="logo" className='w-auto h-[40px] object-contain' />
            </div>
            {children}
            <div className=''>
               <a href='https://discord.com/invite/midjourney' className={`${isSearchInNavbar ? 'hidden lg:block' : 'block'}`}><button className='text-black font-medium bg-white h-[50px] py-2 px-4 flex flex-row gap-1 rounded-full items-center justify-center'><img src='./midjourney.png' alt="logo" className='h-[40px] w-auto object-contain'></img>Midjourney</button></a>
            </div>
        </div>
    );
}


export default Navbar