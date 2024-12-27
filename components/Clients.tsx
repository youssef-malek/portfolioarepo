/* eslint-disable @next/next/no-img-element */
import React from "react";
import { InfiniteMovingCards } from "./ui/InfinitMovingCards";
import { companies, testimonials } from "@/data";
 

const Clients = () => {
  return (
    <div className="py-20" id="testimonials">
      <h1 className="heading">
        Kind words from 
        <span className="text-purple"> statisfied users</span>
      </h1>
      <div className="flex  flex-col items-center max-lg:mt-10">
      <InfiniteMovingCards 
            items={testimonials}
            direction="right"
            speed="slow"
        />
        <div className="flex flex-wrap mt-10 items-center justify-center gap-4 md:gap-16 max-lg:mt-10">
          {companies.map(({id,name,img,nameImg})=>
          
           <div key={id}>
             <img  src={img} alt={name} className="md:w-10 w-5" />
             <img src={nameImg} alt={name} className="md:w-24 w-20" />

           </div>
          
          )}
        </div>
      </div>
    </div>
  );
};

export default Clients;
