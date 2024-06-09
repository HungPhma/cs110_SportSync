import React, { useState } from 'react';
import planIcon from '../Photo/scheduler.png';
import friendIcon from '../Photo/friends.png';
import historyIcon from '../Photo/history.png';
import expandIcon from '../Photo/expand.png';
import collapseIcon from '../Photo/collapse.png';
import '../App.css';

const Banner = () => {
  const [showPlanEvents, setShowPlanEvents] = useState(false);
  const [showFriends, setShowFriends] = useState(false);
  const [showHistory, setShowHistory] = useState(false);

  const togglePlanEvents = () => {
    setShowPlanEvents(!showPlanEvents);
  };

  const toggleFriends = () => {
    setShowFriends(!showFriends);
  };

  const toggleHistory = () => {
    setShowHistory(!showHistory);
  };

  return (
    <div className="App-banner">
      <div className="banner-section">
        <div className="section-title">
          <img src={planIcon} alt="Plan Event Icon" className="icon" />
          <h5>Plan Event</h5>
          <button onClick={togglePlanEvents} className="expand-button">
            <img
              src={showPlanEvents ? collapseIcon : expandIcon}
              alt={showPlanEvents ? 'Collapse' : 'Expand'}
              className={`expand-icon ${showPlanEvents ? 'rotate' : ''}`}
            />
          </button>
        </div>
        {showPlanEvents && (
          <div className="event-list">
            <div>Event 1</div>
            <div>Event 2</div>
            <div>Event 3</div>
            <div>Event 4</div>
          </div>
        )}
      </div>

      <div className="banner-section">
        <div className="section-title">
          <img src={friendIcon} alt="Friend Event Icon" className="icon" />
          <h5>Friends</h5>
          <button onClick={toggleFriends} className="expand-button">
            <img
              src={showFriends ? collapseIcon : expandIcon}
              alt={showFriends ? 'Collapse' : 'Expand'}
              className={`expand-icon ${showFriends ? 'rotate' : ''}`}
            />
          </button>
        </div>
        {showFriends && (
          <div className="event-list">
            <div>Friend 1</div>
            <div>Friend 2</div>
            <div>Friend 3</div>
            <div>Friend 4</div>
          </div>
        )}
      </div>

      <div className="banner-section">
        <div className="section-title">
          <img src={historyIcon} alt="Event History Icon" className="icon" />
          <h5>Event History</h5>
          <button onClick={toggleHistory} className="expand-button">
            <img
              src={showHistory ? collapseIcon : expandIcon}
              alt={showHistory ? 'Collapse' : 'Expand'}
              className={`expand-icon ${showHistory ? 'rotate' : ''}`}
            />
          </button>
        </div>
        {showHistory && (
          <div className="event-list">
            <div>History 1</div>
            <div>History 2</div>
            <div>History 3</div>
            <div>History 4</div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Banner;
