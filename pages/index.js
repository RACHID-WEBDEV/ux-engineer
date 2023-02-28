/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import FoodCart from '@/components/FoodCart';
import NavBar from '@/components/NavBar';
import SearchInput from '@/components/SearchInput';
import Slider from '@/components/Slider';
import React from 'react';
import foodData from './data/foodData';

const UiEngineerTest = () => {
  return (
    <div className="body">
      <main className="mobile_main">
        <div className="mobile_iphone">
          <img src="/static/icons/status.svg" alt=" status" />
          <NavBar />
          <div className="mt-12">
            <h1 className="text-2xl leading-7 text-gray-800 max-w-[230px]  font-bold  mx-6 my-4 ">
              Let’s find you good quality food .
            </h1>
          </div>
          <SearchInput />
          <div className="my-5 ml-4">
            <Slider />
          </div>

          <div className="py-3">
            <h5 className=" text-gray-800 font-semibold text-xl pl-5 pb-1">Popular Food</h5>

            <div className=" max-h-72 pb-20 overflow-y-scroll">
              {foodData.map(({ title, price, open, resturantName, image }, item) => (
                <FoodCart
                  key={item}
                  title={title}
                  image={image}
                  price={price}
                  resturantName={resturantName}
                  open={open}
                />
              ))}
            </div>
          </div>

          <div className=" ">
            <div className="nav-container p-6 ">
              <div className="nav-icon flex items-center justify-around">
                <img src="https://img.icons8.com/metro/26/DAA70C/cutlery.png" alt="footer icon" />
                <img src="https://img.icons8.com/metro/26/979C9E/shop.png" />
                {/* <img src="https://img.icons8.com/ios-filled/50/979C9E/checklist--v1.png" alt="footer menu" /> */}
                <img src="https://img.icons8.com/metro/26/979C9E/checklist.png" alt="footer menu" />
              </div>

              <div className="mobile_dock_bar" />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default UiEngineerTest;
