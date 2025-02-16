import React, {useEffect,useState} from 'react';
import { useParams } from 'react-router-dom';
//import APIRequest from '../APIRequest/apiRequest.js';
import Menubar from '../Component/Menubar';
import BDService from '../Component/BDService';
import Footer from '../Component/Footer';

const ServicePage = () => {

   

    return (
        <>
         {/* Menubar */}
         <Menubar />
            {/* BDService */}
            <BDService />
            {/* Footer */}
            <Footer />   
        </>
    );
};

export default ServicePage;