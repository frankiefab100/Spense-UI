import { useState } from "react";
import { BarChart2, GitPullRequest, CircleDot, GitBranch } from "lucide-react";
import styles from "./Feature.module.css";

const tabs = [
  {
    id: "contributors",
    title: "Contributors Metrics",
    description:
      "Detailed insights into distribution of contributions as well as key contributors.",
    icon: BarChart2,
    image: "/images/View-Contributors.png",
  },
  {
    id: "pull-requests",
    title: "Pull Request Analytics",
    description: "Monitor the status of pull requests.",
    icon: GitPullRequest,
    image: "/images/View-Pullrequests.png",
  },
  {
    id: "issues",
    title: "Issue Tracking",
    description: "Track open and closed issues over time.",
    icon: CircleDot,
    image: "/images/View-Issues.png",
  },
  {
    id: "branches",
    title: "Branch Visualization",
    description:
      "Understand the relationships and hierarchy of branches of a repository.",
    icon: GitBranch,
    image: "/images/View-Branches.png",
  },
];

const Feature = () => {
  const [activeTab, setActiveTab] = useState(tabs[0].id);

  const activeImage = tabs.find((tab) => tab.id === activeTab)?.image;

  return (
    <section id="about" className={styles.featureSection}>
      <div className={styles.feature}>
        <div className={styles.leftSection}>
          <div className={styles.heading}>
            <h2 className={styles.title}>Visually Appealing Charts</h2>
            <p className={styles.description}>
              See graphical representation of projects hosted in GitHub right
              from your browser.
            </p>
          </div>
          <ul className={styles.tabList}>
            {tabs.map((tab) => (
              <li
                key={tab.id}
                className={`${styles.tabItem} ${
                  activeTab === tab.id ? styles.active : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
                role="button"
                tabIndex={0}
              >
                <tab.icon className={styles.tabIcon} />
                <div className={styles.tabContent}>
                  <h3 className={styles.tabTitle}>
                    {tab.title}. {""}
                    <span className={styles.tabDescription}>
                      {tab.description}
                    </span>
                  </h3>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.rightSection}>
          <img
            src={activeImage}
            alt={`Visualization for ${activeTab}`}
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
};

export default Feature;
