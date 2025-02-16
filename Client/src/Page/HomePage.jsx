import React, {useEffect, useState} from 'react';
import Menubar from '../Component/Menubar';
import HeroSlider from '../Component/HeroSlider';
import BlogService from '../Component/BlogService';
import {} from '../APIRequest/apiRequest.js';
import Footer from '../Component/footer.jsx';

const HomePage = () => {

   

    return (
        <>
         {/* Menubar */}
         <Menubar />
            {/* HeroSlider */}
            <HeroSlider />
            {/* BlogService */}    
            <BlogService />
            {/* Footer */}
            <Footer />   
        </>
    );
};

export default HomePage;