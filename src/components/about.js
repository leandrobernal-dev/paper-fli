import React from "react";
import $ from "jquery";

export default function About() {
  function removeAbout() {
    $(".about-section")[0].classList.remove("show");
    $(".content")[0].classList.remove("blur");
  }
  return (
    <section onClick={removeAbout} className="about-section">
      <div className="about-container">
        <div className="close-about">
          <i onClick={removeAbout} className="fa-solid fa-xmark"></i>
        </div>
        <h1>Paper-flip</h1>
        <br />
        <p>
          Paper-flip is a free meme and inspirational image generator combined
          to one. You can use paper-flip to generate images for your videos,
          social media posts and others.
        </p>

        <br />
        <br />

        <h3>How to use?</h3>
        <br />
        <ul>
          <li>Select the category of images you want to generate</li>
          <li>Click "Generate New" to generate new images</li>
          <li>Click and drag the text element</li>
          <li>You can edit a few text style settings</li>
          <li>
            When you're finished editing, you can click the "Save Image" to
            download the image
          </li>
        </ul>

        <br />
        <br />

        <h3>Developer</h3>
        <br />
        <a href="#">bernalleandro-dev.com</a>
      </div>
    </section>
  );
}
