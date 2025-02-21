import React, { useEffect } from 'react';


const BDService = () => {

    // Prevent Background scrolling when modal is open
    useEffect(()=>{
        if (BDService){
            document.body.style.overflow = 'hidden'; // Disable background scroll
        }else{
            document.body.style.overflow = 'auto'; // Enable scroll when modal is closed
        }
        return () => {
            document.body.style.overflow = 'auto'; // Reset scroll on unmount
        }
    })
    return (
        <div>
             
        </div>
    );
};

export default BDService;