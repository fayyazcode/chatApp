import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://media-exp1.licdn.com/dms/image/D5635AQFG0MMs3wMIAw/profile-framedphoto-shrink_200_200/0/1625342965637?e=1633226400&v=beta&t=ty0PEao_MpR0mT_7m6Rbn-OE2Jgo3nO8KtVicGNHMVM" />
          </div>
          <h4>Fayyaz</h4>
          <p>Web Developer</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            ultrices urna a imperdiet egestas. Donec in magna quis ligula
          </div>
        </div>
      </div>
    );
  }
}
