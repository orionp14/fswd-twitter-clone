import React, { useState, useEffect } from 'react';
import Sidebar from '@src/home/Sidebar';
import Widgets from '@src/home/Widgets';
import './Profile.scss'
import { Avatar } from "@material-ui/core";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function Profile() {
  const [followers, setFollowers] = useState(0);
  const [joinedDate, setJoinedDate] = useState('');

  useEffect(() => {
    // Generate a random number between 0 and 1000
    const randomFollowers = Math.floor(Math.random() * 1001);
    setFollowers(randomFollowers);

    const randomDate = generateRandomDate();
    setJoinedDate(randomDate);
  }, []);

  const generateRandomDate = () => {
    const start = new Date(2010, 0, 1); // Start date for the random range
    const end = new Date(); // End date (current date)
    const randomTime = start.getTime() + Math.random() * (end.getTime() - start.getTime());
    const randomDate = new Date(randomTime);
    return randomDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };

  const handleIconClick = () => {
    window.location.href = '/home'; // Replace '/' with the appropriate URL for your home page
  };

  const username = decodeURIComponent(window.location.pathname.split('/')[2]);

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
        </div>
        {/* Display the user's tweets */}
        <Widgets/>
      </div>
    </div>
  );
}

export default Profile;