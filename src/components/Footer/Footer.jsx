import React from "react";
import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footerNav}>
        Designed and built with ❤️ by{" "}
        <a href="https://x.com/frankiefab100">Franklin Ohaegbulam</a>
      </div>
    </section>
  );
};

export default Footer;
