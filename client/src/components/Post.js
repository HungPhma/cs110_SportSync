// Import images
import commentIcon from '../Photo/comment.png';
import shareIcon from '../Photo/share.svg';
import heartIcon from '../Photo/heart.png';

// Use state for post specific values
import { useState } from 'react';

const Post = (props) => {

  const [title, setTitle] = useState("Sample Event");

  return (  
    <div className="post">
      <h4>{ props.title } <span className="post-date">June 6</span></h4>
      <p className="post-img"> Image Here</p>
      <div className="post-bottom">
        <p className="btn-join">RSVP</p>
        <div className="post-bottom-right">
          <img className="btn" src={commentIcon}></img>
          <img className="btn heart" src={heartIcon}></img>
          <img className="btn" src={shareIcon}></img>
        </div>
      </div>
    </div>
  );
}
 
export default Post;