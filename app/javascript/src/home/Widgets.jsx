import React from 'react';
import './Widgets.scss';
import SearchIcon from "@material-ui/icons/Search";

function Widgets() {
 return(
    <div className="widgets">
      <div className="widgets__input">
        <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className='widgets__widgetContainer'>
      <h2>What's happening</h2>
      <div className='trends'>
      <div className="trends-header">
            <span><b>Trending Hashtags</b></span><span> &#183; </span><small><a href="">Change</a></small>      
          </div>
          <ul className="trends-list">
            <li><a href="#">#SunsetVibes</a></li>
            <li><a href="#">#CoffeeAddict</a></li>
            <li><a href="#">#AdventureAwaits</a></li>
            <li><a href="#">#MondayBlues</a></li>
            <li><a href="#">#PetLove</a></li>
          </ul>
    </div>
    <div className='suggested-accounts'>
      <div className="accounts-header">
            <span><b>Suggested Accounts</b></span><span> &#183; </span><small><a href="">Change</a></small>      
          </div>
          <ul className="accounts-list">
            <li><a href="#">@elonmusk</a></li>
            <li><a href="#">@Oprah</a></li>
            <li><a href="#">@BillGates</a></li>
            <li><a href="#">@TheRock</a></li>
            <li><a href="#">@neiltyson</a></li>
          </ul>
    </div>
   </div>
   </div>
 )
}

export default Widgets;