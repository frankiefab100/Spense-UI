import React from "react";
import styles from "./FAQ.module.css";

const FAQ = () => {
  const questions = [
    {
      question: "What is GitSnap?",
      answer:
        "GitSnap is a tool designed to visualize contributors, pull requests, issues, and branches of any existing GitHub repository.",
    },
    {
      question: "Is GitSnap free and only for developers?",
      answer:
        "GitSnap is free to use and is particularly useful for developers who need to understand the state of a project codebase.",
    },
    {
      question: "Do I need to create an account to use GitSnap?",
      answer: "No, you do not need to create an account to use GitSnap.",
    },
    {
      question: "Does GitSnap save my data on server?",
      answer:
        "No, your data are never stored on any server. All the processing happens locally in your web browser.",
    },
  ];

  return (
    <section className={styles.faq}>
      <h2 className={styles.title}>FAQ</h2>
      <div className={styles.grid}>
        {questions.map((item, index) => (
          <div key={index} className={styles.question}>
            <h3>{item.question}</h3>
            <p>{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQ;
