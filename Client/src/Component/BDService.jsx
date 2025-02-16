import React, { useEffect } from 'react';


const BDService = () => {

    // Prevent Background scrolling when modal is open
    useEffect(()=>{
        if (selectedservice){
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
              <div className="container mx-auto my-16 p-9">
                <div className="grid p-x-9 grid-cols-1 mt-2 md:grid-cols-1 lg:grid-cols-1">
                    <div className="card w-100 glass">
                        <figure><img src={props.list['postDetails']['img']} alt="car!"/></figure>
                        <div className="card-body">
                            <h2 className="card-title">{props.list['postDetails']['title']}</h2>
                            <p>{props.list['postDetails']['content']}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BDService;