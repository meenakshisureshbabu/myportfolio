import React from "react";
import "../Body/body.css";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import Header from "../Header/Header";

function Body() {
  return (
    <>
    
    <div className="body-container">
      <div className="body-div">
        <div className="body-content">
          <div className="name-body-div">
            <h2>Meenakshi Sundari Suresh Babu</h2>
          </div>
          <div className="icons-div">
              <div className="github"><a href="https://github.com/meenakshisureshbabu" target="_blank"><img className="github-icon" src="https://w7.pngwing.com/pngs/914/758/png-transparent-github-social-media-computer-icons-logo-android-github-logo-computer-wallpaper-banner-thumbnail.png" alt="github"/></a></div>
              <div className="linkedin"><a href="https://www.linkedin.com/in/meenakshisb/" target="_blank"><img className="linkedin-icon" src="https://cdns.iconmonstr.com/wp-content/releases/preview/2012/240/iconmonstr-linkedin-3.png" alt="linkedin"/></a></div>
          </div>
          
        </div>
      </div>
    </div>
    </>
  );
}

export default Body;
