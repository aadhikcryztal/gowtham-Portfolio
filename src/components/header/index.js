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
          I completed my Bachelor's in electrical
          engineering in 2015. Then kick-started my
          electrical career, which has continued for six
          years and a few months. Suddenly, the Pandemic
          slow down my career growth in Electrical. Later I
          took a personal interest and started learning
          about User experience and User interface. Then am
          start created prototypes with the help of designs
          available on famous platforms like dribble,
          Behance, etc.
        </p>
        <a href="http://gowthamaadhik.netlify.com">
          Download Resume
        </a>
      </div>
    </div>
  );
};

export default Header;
