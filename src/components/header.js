import React from "react";
import $ from "jquery";

export default function Header() {
  function showAbout() {
    $(".about-section")[0].classList.add("show");
    $(".content")[0].classList.add("blur");
  }
  return (
    <header id="header">
      <div className="header-column">
        <div className="logo">
          <p>paper-flip</p>
        </div>
        <nav>
          <a onClick={showAbout}>About</a>
        </nav>
      </div>
    </header>
  );
}
