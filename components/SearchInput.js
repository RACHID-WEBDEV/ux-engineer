/* eslint-disable @next/next/no-img-element */
import React from 'react';

const SearchInput = () => {
  return (
    <div className="w-full px-4">
      <div className="flex items-center gap-5">
        <form className="w-4/5">
          <label htmlFor="search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                aria-hidden="true"
                className="w-5 h-5 text-gray-500 dark:text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="search"
              className="block w-full p-4 pl-10 text-sm font-Poppins text-gray-900 border-[1.5px] border-gray-700 rounded-xl bg-gray-50 focus:ring-gray-500 focus:border-gray-500 outline-none"
              placeholder="Search your food..."
              required
            />
          </div>
        </form>
        <button
          type="submit"
          className="text-white  inline-flex items-center justify-center bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-gray-300 font-medium rounded-xl text-sm py-5 px-5 "
        >
          <img src="/static/icons/filter.svg" alt=" filter icon" />
        </button>
      </div>
    </div>
  );
};

export default SearchInput;
