import React, { useState, useEffect } from 'react';


function Navbar({children, className}) {
    return (
        <div className={`w-full h-[70px] bg-black flex flex-row justify-between items-center fixed top-0 left-0 px-8 ${className}`}>
            <div>
                <img src='/logo.png' alt="logo" className='w-auto h-[40px] object-contain' />
            </div>
            {children}
            <div></div>
        </div>
    );
}


export default Navbar