import React from 'react';
import Menubar from '../Component/Menubar';
import About from '../Component/About';
//import TeamService from '../Component/TeamService';
import Footer from '../Component/Footer';

const AboutPage = () => {
    return (
        <>
         {/* Menubar */}
         <Menubar />
            {/* About */}
            <About />
            {/* TeamService */}    
            
            {/* Footer */}
            <Footer />   
        </>
    );
};

export default AboutPage;