import React, { useState, useEffect } from 'react';
import Sidebar from '@src/home/Sidebar';
import Widgets from '@src/home/Widgets';
import './Profile.scss'
import { Avatar } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Post from '@src/home/Post';

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [joinedDate, setJoinedDate] = useState('');
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    // Generate a random number between 0 and 1000
    const randomFollowers = Math.floor(Math.random() * 1001);
    setFollowers(randomFollowers);

    const randomDate = generateRandomDate();
    setJoinedDate(randomDate);

    // Fetch the pre-existing tweets for the username
    const filteredTweets = preExistingTweets.filter((tweet) => tweet.username === username);
    setTweets(filteredTweets);
  }, []);

  const generateRandomDate = () => {
    const start = new Date(2010, 0, 1); // Start date for the random range
    const end = new Date(); 
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleIconClick = () => {
    window.location.href = '/home';
  };

  const username = decodeURIComponent(window.location.pathname.split('/')[2]);

  // Pre-existing tweets
  const preExistingTweets = [
    { 
      username: 'Oprah', 
      message: 'Gratitude unlocks the fullness of life. Be thankful for the little things. 🙏 #Gratitude'
    },
    { 
      username: 'Oprah', 
      message: 'Believe in yourself and all that you are. Know that there is something inside you that is greater than any obstacle. ✨ #BelieveInYourself'
    },
    { 
      username: 'Oprah', 
      message: 'The biggest adventure you can take is to live the life of your dreams. Dare to dream, and make it a reality! 🌟✨ #DreamBig'
    },
    { 
      username: 'Kylie Jenner', 
      message: 'Excited to launch my new makeup collection. Stay tuned for the latest beauty trends! 💄💅 #MakeupGoals'
    },
    { 
      username: 'Kylie Jenner', 
      message: 'Makeup is an art, and I\'m the artist. Let your creativity flow and express your unique beauty! 🎨✨ #ArtOfMakeup'
    },
    { 
      username: 'Kylie Jenner', 
      message: 'Beauty begins the moment you decide to be yourself. Embrace your true self and let your inner beauty shine! 💖🌟 #BeYourself'
    },
    { 
      username: 'Serena Williams', 
      message: 'Putting in the work and pushing my limits on the court. Never stop pursuing your passions! 🎾 #TennisLife'
    },
    { 
      username: 'Serena Williams', 
      message: 'The harder you work, the luckier you get. Success is not a coincidence, it\'s the result of dedication and perseverance! 💪🏆 #SuccessMindset'
    },
    { 
      username: 'Serena Williams', 
      message: 'Believe in yourself, even when nobody else does. Trust your abilities and keep striving for greatness! 👑✨ #BelieveInYourself'
    },
    { 
      username: 'Cristiano Ronaldo', 
      message: 'Another day, another goal. Hard work pays off! ⚽️⚡️ #Football'
    },
    { 
      username: 'Cristiano Ronaldo', 
      message: 'Success is no accident. It is hard work, perseverance, learning, sacrifice, and most of all, love for what you do. ❤️⚽️ #PassionForFootball'
    },
    { 
      username: 'Cristiano Ronaldo', 
      message: 'Champions keep playing until they get it right. Keep pushing yourself, and never settle for anything less than your best! 🏆💯 #ChampionMindset'
    },
    { 
      username: 'Barack Obama', 
      message: 'We can create change when we come together as a community. Let’s build a brighter future! 🌍🤝 #CommunityAction'
    },
    { 
      username: 'Barack Obama', 
      message: 'Change will not come if we wait for some other person or some other time. We are the ones we\'ve been waiting for. Let\'s make a difference! 🗳️✊ #ChangeMakers'
    },
    { 
      username: 'Barack Obama', 
      message: 'Don\'t just aspire to make a living, aspire to make a difference. Your actions have the power to shape the world around you! 🌟🌎 #MakeADifference'
    },
    { 
      username: 'Elon Musk', 
      message: "Just landed on Mars. It's dusty but promising. Time to start building a civilization! 🚀🪐 #SpaceExploration"
    },
    { 
      username: 'Elon Musk', 
      message: "The future belongs to those who believe in the beauty of their dreams. Dream big, think big, and make it a reality! 🌌✨ #DreamBig"
    },
    { 
      username: 'Elon Musk', 
      message: "The only way to discover the limits of the possible is to go beyond them into the impossible. Push the boundaries and redefine what\'s possible! 🔝🚀 #Innovation"
    }
  ];
  

  return (
    <div>
      <div className='profile'>
        <Sidebar />
        <div className='user-feed'>
          <div className='feed-header'>
            <div className='icon' onClick={handleIconClick}>
              <ArrowBackIcon className='hoverable-icon' />
            </div>
            <h3 className='top-username'>{username}</h3>
          </div>
          <div className='banner'></div>
          <div className='profile-top'>
            <div className='profile-image'>
              <Avatar className='profile-avatar' style={{ width: 140, height: 140 }} /> 
            </div>
            <button className='btn btn-md btn-primary follow-button'>Follow</button>
            <div className='profile-username'>
              <h2>{username}</h2>
              <h3 className='no-space'>{`@${username.replace(' ', '')}`}</h3>
              <h4 className='followers'>
                  <span className='number'>{followers}K</span> Followers
              </h4>
              <h4 className='joined'>Joined {joinedDate}</h4>
            </div>
          </div>
          <div className="postContainer">
          {tweets.map((tweet, index) => (
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
        <Widgets/>
      </div>
    </div>
  );
}

export default Profile;
