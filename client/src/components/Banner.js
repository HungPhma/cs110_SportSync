import React from 'react';
import planIcon from '../Photo/scheduler.png';
import friendIcon from '../Photo/friends.png';
import historyIcon from '../Photo/history.png';
import '../App.css';

const Banner = () => {
  return (
    <div className="App-banner">
      <div className="banner-section">
        <div className="section-title">
          <img src={planIcon} alt="Plan Event Icon" className="icon" /> <h5>Plan Event</h5>
        </div>
        <div>event 1</div>
        <div>event 1</div>
        <div>event 1</div>
        <div>event 1</div>
      </div>
      {/* <hr/> */}
      <div className="banner-section">
        <div className="section-title">
          <img src={friendIcon} alt="Friend Event Icon" className="icon" /> <h5>Friends</h5>
        </div>
        <div>friend 1</div>
        <div>friend 1</div>
        <div>friend 1</div>
        <div>friend 1</div>
      </div>
      {/* <hr/> */}
      <div className="banner-section">
         <div className="section-title">
          <img src={historyIcon} alt="Friend Event Icon" className="icon" /> <h5>Event History</h5>
        </div>
        <div>history 1</div>
        <div>history 1</div>
        <div>history 1</div>
        <div>history 1</div>
      </div>
    </div>
  );
};

export default Banner;
