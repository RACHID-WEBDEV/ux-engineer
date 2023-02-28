/* eslint-disable @next/next/no-img-element */
import React from 'react';

const FoodCart = ({ price, resturantName, open, title, image }) => {
  return (
    <div className="flex items-center justify-center gap-4 m-4 py-4 bg-white rounded-3xl">
      <div className="relative">
        <img src={image} className="object-cover w-full h-full " alt="food image" />
        <span className="bg-gray-800 text-white rounded-lg p-1 text-xs font-bold absolute bottom-[-5px] right-0 ">
          {' '}
          {price}
        </span>
      </div>
      <div className="">
        <h6 className="text-gray-800 font-bold text-base leading-5 max-w-[186px]">{title}</h6>
        <p className="text-sm text-gray-600 font-medium">{resturantName}</p>
        <div className="text-sm text-gray-600 font-normal inline-flex items-center font-Poppins">
          {open ? (
            <>
              <span className="text-secondary">Opens </span>
              <span className="bg-gray-800 p-0.5 m-1 rounded-full  "> </span>
              <span>{open}</span>
            </>
          ) : (
            <span className="text-secondary">Closed for Today</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default FoodCart;
