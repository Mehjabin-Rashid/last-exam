import React from 'react';
import {NavLink} from 'react-router-dom';

const footer = () => {
    return (
        <div>
            <div className='container mx-auto'>
                <div className='flex items-center justify-center h-screen'>
                  <div className='text-center'>
                  <footer className="footer footer-center bg-base-300 text-base-content p-4 m-4 ">
                   <aside>
                     <p>Copyright © {new Date().getFullYear()} - All right reserved by ACME Industries Ltd</p>
                   </aside>
                  </footer>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default footer;