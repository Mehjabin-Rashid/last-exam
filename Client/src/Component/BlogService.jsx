import React from 'react';
import { NavLink } from 'react-router-dom';

const BlogService = () => {
  return (
    
       <div className="card bg-neutral w-96 shadow-xl">
        <figure className="px-10 pt-10">
        <img src="/img/M_logo.jpg" alt="" className="rounded-xl" />
        </figure>
         <div className="card-body">
         <h2 className="card-title">Card title!</h2>
         <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
         <div className="card-actions justify-end">
         <button className="btn btn-primary">Buy Now</button>
       </div>
     </div>
    </div>
  );
};

export default BlogService;