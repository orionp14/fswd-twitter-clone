import React from "react";
import "./Post.scss";
import { Avatar } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";

function Post({
    username,
    text,
  }) {

    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar/>
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                    <a href="#">
                        <h3>
                            {username}{" "}
                            <span>
                            <VerifiedUserIcon className="post__badge" />
                            </span>
                        </h3>
                    </a>
                    </div>
                    <div className="post__headerDescription">
                        <p>{text}</p>
                    </div>  
                </div>
                <button className="btn btn-sm btn-outline-danger delete-btn">
                    Delete
                </button>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon fontSize="small" />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </div>
        </div>
    )
}

export default Post;