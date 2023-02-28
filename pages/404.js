import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { randomNumberText } from '@/utils/utils';

function Page404() {
  const [num404, setNum404] = useState('0000');

  useEffect(() => {
    randomNumberText('404', setNum404);
  }, []);

  return (
    <>
      {num404 !== '0000' && (
        <div className="min-h-screen w-full flex items-center justify-center flex-col animate-fadeIn">
          <h1 className="text-5xl lg:text-7xl text-white font-monospace font-bold opacity-100">{`
          {error:${num404}}`}</h1>
          <div className="flex flex-col items-center mt-8 justify-between">
            <p className="text-gray text-xl px-2 text-center max-w-xl lg:px-0 flex items-center">
              Sorry, the page you are looking for might be renamed, remobileed, or might never exist.&nbsp;&nbsp;
            </p>
            <div className="mt-6 lg:mt-10">
              <Link href="/">
                <a>
                  <span className="w-full sm:w-auto  flex-shrink border border-pink-light text-base px-4 py-1 rounded-xl text-pink-light bg-pink-darkerer hover:bg-pink hover:text-white transition-colors cursor-pointer">
                    Return Home
                  </span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default Page404;
