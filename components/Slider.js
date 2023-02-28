/* eslint-disable @next/next/no-img-element */
import React from 'react';

const Slider = () => {
  return (
    <div className="flex items-center gap-3 overflow-scroll">
      <div className="bg-white p-4 rounded-md ">
        <img src="/static/icons/breakfast.png" className="object-cover w-16 h-14 " alt="food image" />
        <p className="text-xs text-center text-gray-800">Breakfast</p>
      </div>
      <div className="bg-white p-4 rounded-md ">
        <img src="/static/icons/launch.png" className="object-cover w-16 h-14 " alt="food image" />

        <p className="text-xs text-center pt-1 text-gray-800">launch</p>
      </div>
      <div className="bg-white p-4 rounded-md">
        <img src="/static/icons/dinner.png" className="object-cover w-16 h-14 " alt="food image" />
        <p className="text-xs text-center text-gray-800">Dinner</p>
      </div>
      <div className="bg-white p-4 rounded-md">
        <img src="/static/icons/breakfast.png" alt="food image" />
        <p className="text-xs text-center text-gray-800">Popular</p>
      </div>
    </div>
  );
};

export default Slider;
