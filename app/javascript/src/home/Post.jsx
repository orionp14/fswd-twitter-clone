import React from "react";
import "./Post.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({ username, text, onDelete, isMine }) {
  const processedText = text.replace(/(#\w+)/g, "<span><a href class='hashtag'='/hashtag/$1'>$1</a></span>");


  return (
    <div className="post">
      <div className="post__avatar">
        <Avatar />
      </div>
      <div className="post__body">
        <div className="post__header">
        <div className="post__headerText">
            {isMine ? (
              <a href={`/profile/${username}`}>
                <h3>
                  {username}{" "}
                  <span>
                    <VerifiedUserIcon className="post__badge" />
                  </span>
                </h3>
              </a>
            ) : (
              <a href={`/users/${username}`}>
                <h3>
                  {username}{" "}
                  <VerifiedUserIcon className="post__badge" />
                </h3>
              </a>
            )}
          </div>
          <div className="post__headerDescription">
            <p dangerouslySetInnerHTML={{ __html: processedText }}></p>
          </div>
        </div>
        {isMine && (
            <button className="btn btn-sm btn-outline-danger delete-btn" onClick={onDelete}>
              Delete
            </button>
          )}
        <div className="post__footer">
          <ChatBubbleOutlineIcon fontSize="small" />
          <RepeatIcon fontSize="small" />
          <FavoriteBorderIcon fontSize="small" />
          <PublishIcon fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
