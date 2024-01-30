import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import profilePicture from '../media/profile-picture.jpg';

function ProfileCard() {
  return (
    <section className="container">
      <div class="box">
      <img className="profile-picture" src={profilePicture} alt="Profile picture" />
      <h2>Darinka</h2>
      <p>Hej! I'm a software developer based in Copenhagen</p>
      <div className="icons">
        <a href="https://www.linkedin.com/in/darinkagm/">
          <FontAwesomeIcon icon={faLinkedin} style={{ fontSize: '2rem', margin: ".2rem" }} />
        </a>
        <a href="https://github.com/DarinkaGM">
          <FontAwesomeIcon icon={faGithub} style={{ fontSize: '2rem', margin: ".2rem" }} />
        </a>
        <a href="mailto:dariinkagm@gmail.com">
          <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '2rem', margin: ".2rem" }} />
        </a>
        <a href="tel:+45-42683008">
          <FontAwesomeIcon icon={faPhone} style={{ fontSize: '2rem', margin: ".2rem" }} />
        </a>
      </div>
    </div>
    </section>
  );
}

export default ProfileCard;
