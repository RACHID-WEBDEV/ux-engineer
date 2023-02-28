/* eslint-disable @next/next/no-img-element */
import React from 'react';

const NavBar = () => {
  return (
    <div>
      <div className="bg-white p-2 ">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/static/icons/bar.svg" alt=" menu" />
            <img src="/static/icons/FoodJoint.svg" alt=" logo" />
          </div>

          <div className="flex items-center gap-3">
            <div className="flex items-center gap-3">
              <img src="static/icons/Notification.svg" alt=" menu icon" />
              <img src="/static/icons/Heart.svg" alt=" heart icon" />
              <img src="/static/icons/Buy.svg" alt=" buy icon" />
            </div>
            <div>
              <img src="/static/icons/avatar.svg" alt=" buy icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
