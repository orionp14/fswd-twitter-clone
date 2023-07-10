import React from 'react';
import './Feed.scss';
import TweetBox from './TweetBox';
import Post from './Post';

function Feed() {
 return (
    <div className="feed">
        <div className="feed__header">
          <h2>Home</h2>
        </div>
        <TweetBox />
    </div>
 )
}

export default Feed;