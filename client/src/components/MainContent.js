import React from 'react';
import Post from './Post';

const MainContent = () => {
  return (
    <div className="App-main">
        <div>
            <h2 style={{borderBottom: "#aeaeae solid 1px", paddingBottom: "10px"}}>Event <span style={{color: "#518AC5"}}>Feed</span></h2>
            <Post title={"David's Basketball Game"} sport={"Basketball/icon"}/>
            <Post title={"Rec league soccer"} sport={"Soccer/icon"}/>
            <Post title={"Rec league soccer"} />
            <Post title={"Rec league soccer"} />
            <Post title={"Rec league soccer"} />
            <Post title={"Rec league soccer"} />
            <Post title={"Rec league soccer"} />
        </div>
    </div>
  );
};

export default MainContent;
