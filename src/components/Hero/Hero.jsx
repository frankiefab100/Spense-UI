import React from "react";
import HeroImgMobile from "/images/Hero-Image-Mobile.png";
import HeroImgTablet from "/images/Hero-Image-Tablet.png";
import HeroImgDesktop from "/images/Hero-Image-Desktop.png";
import Checkmark from "/icons/Checkmark.svg";
import "./Hero.css";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-top">
        <picture>
          <source
            media="(max-width: 469px)"
            srcSet={HeroImgMobile}
            alt="woman recording expenses in her desk"
          />
          <source
            media="(min-width: 470px)"
            srcSet={HeroImgTablet}
            alt="woman recording expenses in her desk"
          />
          <source
            media="(min-width: 980px)"
            srcSet={HeroImgDesktop}
            alt="woman recording expenses in her desk"
          />
          <img src={HeroImgMobile} alt="woman recording expenses in her desk" />
        </picture>
      </div>

      <div className="hero-bottom">
        <h1 className="title">Share your unfiltered thoughts. Get paid.</h1>
        <p className="subtitle">
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing{" "}
          <em>just</em> that.
        </p>
        <div className="selling-points">
          <span>
            <img src={Checkmark} alt="checkmark" />
            Receive 99% off the earnings.
          </span>
          <span>
            <img src={Checkmark} alt="checkmark" />
            Get paid via Debit Card, ACH, or Paypal.
          </span>
          <span>
            <img src={Checkmark} alt="checkmark" />
            Withdraw your earnings anytime.
          </span>
        </div>

        <div className="input-field">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="john@example.com"
          />
          <button>Get Started</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
