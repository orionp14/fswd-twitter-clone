import React from 'react';
import Sidebar from '@src/home/Sidebar';
import Widgets from '@src/home/Widgets';
import './Profile.scss'
import { Avatar } from "@material-ui/core";

function Profile() {
    // Fetch the user's tweets and name here
  
    return (
      <div>
        <div className='profile'>
        <Sidebar />
        <div className='user-feed'>
        <h2>User's Name</h2>   
        </div>
        {/* Display the user's tweets */}
        <Widgets/>
        </div>
      </div>
    );
}

export default Profile;
  