import React, { useState, useEffect } from 'react';
import './TweetBox.scss';
import { Avatar, Button } from "@material-ui/core";
import IconButton from '@material-ui/core/IconButton';
import PhotoCameraIcon from '@material-ui/icons/PhotoCamera';
import Post from './Post';
import {
  createTweetApi,
  getTweetsApi,
  deleteTweetApi
} from '@src/utils/fetchHelper';

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState("");
  const [tweetImage, setTweetImage] = useState("");
  const [tweets, setTweets] = useState([]);
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    fetch('/api/authenticated')
      .then(response => response.json())
      .then(data => {
        if (data.authenticated) {
          setAuthenticated(true);
          setUser(data.user);
        } else {
          setAuthenticated(false);
          setUser(null);
        }
      })
      .catch(error => {
        console.error('An error occurred while fetching authenticated user:', error);
      });
  }, []);

  useEffect(() => {
    getTweetsApi()
      .then((data) => {
        setTweets(data.tweets);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [submitting]);

  const handleTweetChange = (e) => {
    setTweetMessage(e.target.value);
  };

  const handleImageChange = (e) => {
    setTweetImage(e.target.value);
  };

  const handleSubmitTweet = (e) => {
    e.preventDefault();

    createTweetApi(tweetMessage)
      .then((data) => {
        getTweetsApi()
          .then((data) => {
            setTweets(data.tweets);
          })
          .catch((error) => {
            console.error(error);
          });

        setTweetMessage("");
        setTweetImage("");
      });
  };

  const handleDeleteTweet = (id) => {
    deleteTweetApi(id)
      .then((data) => {
        if (data.success) {
          setTweets((prevTweets) => prevTweets.filter((tweet) => tweet.id !== id));
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  // Pre-existing tweets
  const preExistingTweets = [
    { username: 'Oprah', message: 'Gratitude unlocks the fullness of life. Be thankful for the little things. 🙏 #Gratitude' },
    { username: 'Kylie Jenner', message: 'Excited to launch my new makeup collection. Stay tuned for the latest beauty trends! 💄💅 #MakeupGoals' },
    { username: 'Serena Williams', message: 'Putting in the work and pushing my limits on the court. Never stop pursuing your passions! 🎾 #TennisLife' },
    { username: 'Cristiano', message: 'Another day, another goal. Hard work pays off! ⚽️⚡️ #Football' },
    { username: 'Barack Obama', message: 'We can create change when we come together as a community. Let’s build a brighter future! 🌍🤝 #CommunityAction' },
    { username: 'Elon Musk', message: "Just landed on Mars. It's dusty but promising. Time to start building a civilization! 🚀🪐 #SpaceExploration" },
  ];

  return (
    <div>
      <div className='tweetBox'>
        <form onSubmit={handleSubmitTweet}>
          <div className="tweetBox__input">
            <Avatar></Avatar>
            <input
              placeholder="What's happening?"
              value={tweetMessage}
              onChange={handleTweetChange}
            ></input>
          </div>
          <div className='image-button-container'>
            <IconButton className="tweetBox__imageButton" style={{ marginLeft: '15px' }}>
              <PhotoCameraIcon />
            </IconButton>
            <input
              className="tweetBox__imageInput"
              placeholder="Enter image URL"
              type="text"
              value={tweetImage}
              onChange={handleImageChange}
            ></input>
          
            <Button type="submit" className="tweetBox__tweetButton">
              Tweet
            </Button>
          </div>
        </form>
      </div>

      <div className="postContainer">
        {[...preExistingTweets, ...tweets].reverse().map((tweet, index) => (
          <Post
            key={index}
            username={tweet.username}
            text={tweet.message}
            onDelete={() => handleDeleteTweet(tweet.id)}
            isMine={tweet.is_mine}
          />
        ))}
      </div>
    </div>
  );
}

export default TweetBox;
