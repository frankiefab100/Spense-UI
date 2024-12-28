import React from "react";
import ChromeLogo from "/icons/chrome-logo.svg";
import { Check } from "lucide-react";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <span className={styles.badge}>
          <span>New</span>
          Announcing our latest version 🎉
        </span>
        <h1 className={styles.title}>A Better Way to View GitHub Data</h1>
        <p className={styles.description}>
          GitSnap is an open-source developer tool used to track contributors,
          pull requests, issues, and branches of any project on GitHub.
        </p>

        <a
          href="https://chromewebstore.google.com/detail/gitsnap/gkeemliblioicebplmgekbmpdleogmpg"
          role="button"
          className={styles.button}
        >
          <img src={ChromeLogo} alt="chrome logo" width="25px" height="auto" />
          <span>Download for Chrome</span>
        </a>

        <div className={styles.attributes}>
          <div>
            <Check className={styles.checkmark} />
            <span>No sign up</span>
          </div>
          <div>
            <Check className={styles.checkmark} />
            <span>Open source</span>
          </div>
        </div>
      </div>

      <div className={styles.imageContainer}>
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/Hero-Image-Desktop.png"
            width="500px"
            height="auto"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/Hero-Image-Tablet.png"
            width="400px"
            height="auto"
          />
          <img
            src="/images/Hero-Image-Tablet.png"
            width="400px"
            height="auto"
            alt="GitSnap user interface"
          />
        </picture>
      </div>
    </section>
  );
};

export default Hero;
