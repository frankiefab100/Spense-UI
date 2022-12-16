import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-group">
        <h3>Spense.</h3>
        <p>
          Spense is an open platform for individuals to share their unfiltered
          thoughts. Discuss the topics you love, and get paid for doing{" "}
          <em>just</em> that.
        </p>
      </div>
      <div className="footer-group">
        <h3 id="header">Sitemap</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Homepage</a>
          </li>
        </ul>
      </div>
      <div className="footer-group">
        <h3 id="header">Resources</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Support</a>
          </li>
          <li>
            <a href="link">Contact</a>
          </li>
          <li>
            <a href="link">FAQ</a>
          </li>
        </ul>
      </div>{" "}
      <div className="footer-group">
        <h3>Company</h3>
        <ul className="footer-links">
          <li>
            <a href="link">About</a>
          </li>
          <li>
            <a href="link">Customers</a>
          </li>
          <li>
            <a href="link">Blog</a>
          </li>
        </ul>
      </div>
      <div className="footer-group">
        <h3 id="header">Opportunities</h3>
        <ul className="footer-links">
          <li>
            <a href="link">Jobs</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
