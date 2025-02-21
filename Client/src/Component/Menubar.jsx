import React from 'react';
import { NavLink } from 'react-router-dom';

const Menubar = () => {
    return (
        
        <section className='bg-rose-400 shadow-xl h-[80px] flex items-center'>
            <div className='container mx-auto'>
                <div className='grid grid-cols-12 gap-[30px]'>
                    <div className='col-span-4'>
                        <div className='logo'>
                            <img className='w-[12px]' src='' alt=''/>
                        </div>
                    </div>
                    <div className='col-span-8'>
                        <nav>
                            <ul className='flex gap-[15px]'>
                                <li className='px-[16x] py-[8px]'>
                                    <NavLink to="/">Home</NavLink>
                                </li>
                                <li className='px-[16px] py-[8px]'>
                                    <NavLink to="/About">About</NavLink>
                                </li>
                                <li className='px-[16px] py-[8px]'>
                                    <NavLink to="/Blog">Blog</NavLink>
                                </li>
                                <li className='px-[16px] py-[8px]'>
                                    <NavLink to="/Service">Service</NavLink>
                                </li>
                                <li className='px-[16px] py-[8px]'>
                                    <NavLink to="/Contact">Contact</NavLink>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </section>

    );
};

export default Menubar;