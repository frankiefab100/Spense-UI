import React from "react";
import styles from "./Demo.module.css";

const Demo = () => {
  return (
    <section id="features" className={styles.demo}>
      <div className={styles.demoLeft}>
        <iframe
          src="https://www.youtube.com/embed/2NnhyWik_z4"
          title="GitSnap video"
          frameborder="0"
          allow="autoplay; encrypted-media"
          allowFullScreen
        ></iframe>
      </div>

      <div className={styles.demoRight}>
        <h2 className={styles.title}>GitHub Repository Insights</h2>
        <p>
          With the GitSnap extension, you can easily access key metrics of any
          repository by simply hovering over it.
        </p>
      </div>
    </section>
  );
};

export default Demo;
