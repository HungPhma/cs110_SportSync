import React, { useState } from 'react';

const Followevent = () => {
  const [showUpcomingEvents, setShowUpcomingEvents] = useState(false);
  const [showHappeningNow, setShowHappeningNow] = useState(false);

  const toggleHappeningNow = () => {
    setShowHappeningNow(!showHappeningNow);
  }

  const toggleUpcomingEvents = () => {
    setShowUpcomingEvents(!showUpcomingEvents);

  }

  return (
    <div className="App-banner right">
        <div className="following-container">
          <button onClick={toggleHappeningNow} >Happening now</button>
        </div>
        {showHappeningNow && (
          <div>
            <br></br>
            <p>Event A</p>
            <p>Event B</p>
            <p>Event C</p>
            <p>Event D</p>
            <br></br>
          </div>
        )}
        

        <div className="following-container">
          <button onClick={toggleUpcomingEvents} >My Upcoming Events</button>
        </div>
        {showUpcomingEvents && (
          <div>
            <br></br>
            <p>Event A</p>
            <p>Event B</p>
            <p>Event C</p>
            <p>Event D</p>
            <br></br>
          </div>
        )}
    </div>
  );
};

export default Followevent;
