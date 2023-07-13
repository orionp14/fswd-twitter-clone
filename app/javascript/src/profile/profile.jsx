import React from 'react';
import Sidebar from '@src/home/Sidebar';
import Widgets from '@src/home/Widgets';
import './profile.scss'
import { Avatar } from "@material-ui/core";

function Profile() {
    // Fetch the user's tweets and name here

    // Get the username from the URL
    const username = window.location.pathname.split('/')[2];
    console.log(username);
  
    return (
      <div>
        <div className='profile'>
        <Sidebar />
        <div className='user-feed'>
        <h2>{username}</h2>   
        </div>
        {/* Display the user's tweets */}
        <Widgets/>
        </div>
      </div>
    );
}

export default Profile;
  