import React from "react";
import Profile from "./../../assets/profile.jpg";
import "./style.css";

const Header = () => {
  return (
    <div className="header-container">
      <div className="image-section">
        <div className="blob-container">
          <img src={Profile} alt="Gowthaman" />
        </div>
      </div>
      <div className="user-context">
        <div className="profile-details">
          <p className="user-name">Gowthaman J</p>
          <p className="user-role">UI/UX Engineer</p>
        </div>
        <div className="divider"></div>
        <p className="bio-context">
          Lorem Ipsum is simply dummy text of the printing
          and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of
          type and scrambled it to make a type specimen
          book. It has survived not only five centuries, but
          also the leap into electronic typesetting,
          remaining essentially unchanged. It was
          popularised in the 1960s with the release of
          Letraset sheets containing Lorem Ipsum passages,
          and more recently with desktop publishing software
          like Aldus PageMaker including versions of Lorem
          Ipsum.
        </p>
        <a href="http://gowthamaadhik.netlify.com">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
