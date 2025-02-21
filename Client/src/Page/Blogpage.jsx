import React, {useEffect, useState} from 'react';
import Menubar from '../Component/Menubar';
import { useParams } from 'react-router-dom';
//import APIRequest from '../APIRequest/apiRequest.js';
import BlogService from '../Component/BlogService';
import Footer from '../Component/footer.jsx';

const Blogpage = () => {

     

    return (
        <>
        {/* Menubar */}
        <Menubar />
            {/* BlogService */}
            <BlogService/>
            {/* Footer */}
            <Footer /> 
        </>
           
        
    );
};

export default Blogpage;