import React from "react";
import styles from "./CTA.module.css";

const CTA = () => {
  return (
    <section className={styles.ctaSection}>
      <div className={styles.content}>
        <h2 className={styles.title}>Try Out GitSnap Today</h2>
        <p className={styles.description}>
          Join the 10+ people and organizations using GitSnap to track status of
          their project.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/gitsnap/gkeemliblioicebplmgekbmpdleogmpg"
          className={styles.button}
          role="button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get GitSnap <span className={styles.btnText}>—— it's free</span>
        </a>
      </div>
    </section>
  );
};

export default CTA;
