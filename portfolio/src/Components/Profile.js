import React from "react";
import "./Profile.css";
import FavoriteBorderSharpIcon from "@mui/icons-material/FavoriteBorderSharp";
import BookmarkBorderSharpIcon from "@mui/icons-material/BookmarkBorderSharp";
import ShareSharpIcon from "@mui/icons-material/ShareSharp";
import FeedbackSharpIcon from "@mui/icons-material/FeedbackSharp";
import profilepic from "../asset/images/profilepic.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
const Profile = () => {
  return (
    <div className="profiledetails-container">
        <Tippy content="Follow Taras Migulko">
       
           <img className="profileimg" src={profilepic}></img>

        </Tippy>
      <div className="profile-image-wrapper">
        <Tippy content="Like">
          <FavoriteBorderSharpIcon />
        </Tippy>
      </div>
      <div className="profile-image-wrapper">
        <Tippy content="Save">
          <BookmarkBorderSharpIcon />
        </Tippy>
      </div>
      <div className="profile-image-wrapper">
        <Tippy content="Share">
          <ShareSharpIcon />
        </Tippy>
      </div>
      <div className="profile-image-wrapper">
        <Tippy content="Feedback">
          <FeedbackSharpIcon />
        </Tippy>
      </div>
    </div>
  );
};

export default Profile;
