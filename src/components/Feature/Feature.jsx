import React from "react";
import Facebook from "/icons/Facebook Logo.png";
import Dribbble from "/icons/Dribbble Logo.png";
import Youtube from "/icons/Youtube Logo.png";
import Pinterest from "/icons/Pinterest Logo.png";
import Twitter from "/icons/Twitter Logo.png";
import Reddit from "/icons/Reddit Logo.png";
import Google from "/icons/Google Logo.png";
import Slack from "/icons/Slack Logo.png";
import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <img src={Facebook} alt="Facebook logo" />
      <img src={Dribbble} alt="Dribbble logo" />
      <img src={Youtube} alt="Youtube logo" />
      <img src={Pinterest} alt="Pinterest logo" />
      <img src={Twitter} alt="Twitter logo" />
      <img src={Reddit} alt="Reddit logo" />
      <img src={Google} alt="Google logo" />
      <img src={Slack} alt="Slack logo" />
    </div>
  );
};

export default Feature;
