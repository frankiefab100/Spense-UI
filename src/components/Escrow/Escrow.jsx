import React from "react";
import PhoneMockupMobile from "/images/Phone-Mockup-Mobile.png";
import PhoneMockupTablet from "/images/Phone-Mockup-Tablet.png";
import PhoneMockupDesktop from "/images/Phone-Mockup-Desktop.png";
import "./Escrow.css";

const Escrow = () => {
  return (
    <div className="escrow">
      <div className="escrow-top">
        <h2>Secure your money with Escrow.</h2>
        <p>
          Spense uses escrow to secure all payments. We believe Escrow offers
          the highest level of security for your payments, so you never need to
          worry about scams.
        </p>

        <a id="learn-more" href="learn-more">
          Learn more about Escrow ➡
        </a>
      </div>

      <div className="escrow-bottom">
        <picture>
          <source
            media="(max-width: 469px)"
            srcSet={PhoneMockupMobile}
            alt="phone mockup"
          />
          <source
            media="(min-width: 470px)"
            srcSet={PhoneMockupTablet}
            alt="phone mockup"
          />
          <source
            media="(min-width: 980px)"
            srcSet={PhoneMockupDesktop}
            alt="phone mockup"
          />
          <img src={PhoneMockupMobile} alt="phone mockup" />
        </picture>
      </div>
    </div>
  );
};

export default Escrow;
