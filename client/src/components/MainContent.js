import React from 'react';
import Post from './Post';

const MainContent = () => {
  return (
    <div className="App-main">
        <div>
            <h2 style={{borderBottom: "#aeaeae solid 1px", paddingBottom: "10px"}}>Event <span style={{color: "#518AC5"}}>Feed</span></h2>
            <Post title={"David's Basketball Game"} />
            <Post title={"Rec league soccor"} />
        </div>
    </div>
  );
};

export default MainContent;
