import React from "react";

import "./scss/index.scss";
import "./scss/header.scss";
import "./scss/generator.scss";

import "./scss/output-image.scss";
import "./scss/about.scss";

import Header from "./components/header";
import Generator from "./components/generator";
import About from "./components/about";

export default function App() {
  return (
    <>
      <div className="content ">
        <Header />
        <Generator />
      </div>
      <About />
    </>
  );
}
