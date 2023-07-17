import React from "react";
import "./Sidebar.scss";
import "@material-ui/core/styles";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import NotificationsNoneIcon from "@material-ui/icons/NotificationsNone";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import BookmarkBorderIcon from "@material-ui/icons/BookmarkBorder";
import ListAltIcon from "@material-ui/icons/ListAlt";
import PermIdentityIcon from "@material-ui/icons/PermIdentity";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import { Button } from "@material-ui/core";
import "bootstrap/dist/css/bootstrap.min.css";

function Sidebar() {
  const handleLogout = () => {
    // Perform the logout logic here, such as clearing the authentication token or session
    // For example, if using localStorage:
    localStorage.removeItem("accessToken");

    // Redirect to the login page
    window.location.href = "/";
  };

  return (
      <div className="sidebar">
        <TwitterIcon className="sidebar__twitterIcon" />

        <SidebarOption className='home-icon'
          active={true}
          Icon={HomeIcon}
          text="Home"
        />
        <SidebarOption Icon={SearchIcon} text="Explore" />
        <SidebarOption Icon={NotificationsNoneIcon} text="Notifications" />
        <SidebarOption Icon={MailOutlineIcon} text="Messages" />
        <SidebarOption Icon={BookmarkBorderIcon} text="Bookmarks" />
        <SidebarOption Icon={ListAltIcon} text="Lists" />
        <SidebarOption Icon={PermIdentityIcon} text="Profile" />
        <SidebarOption Icon={MoreHorizIcon} text="More" />

        <Button
        variant="outlined"
        className="sidebar__tweet"
        fullWidth
        onClick={handleLogout}
        >
          Log out
        </Button>
      </div>
  );
}

export default Sidebar;