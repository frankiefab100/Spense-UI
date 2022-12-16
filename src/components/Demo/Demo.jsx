import React from "react";
import TextEditor from "/images/Text-Editor.png";
import "./Demo.css";

const Demo = () => {
  return (
    <div className="demo">
      <div className="demo-top">
        <h2>A text editor like no other.</h2>
        <p>
          Our text editor pulls you into focus mode with it's simplistic design
          and usability, so you can put out your best writing.
        </p>

        <a id="learn-more" href="learn-more">
          Text Editor Live Demo ➡
        </a>
      </div>

      <div className="demo-bottom">
        <img src={TextEditor} alt="text editor" />
      </div>
    </div>
  );
};

export default Demo;
