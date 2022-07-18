import React from "react";
import $ from "jquery";

export default function TextSyleSettings() {
  // Change text styles
  const textStyle = {
    fontSizeChange: (e) => {
      const value = e.target.value;
      $(".active-text")[0].style.fontSize = value + "px";
    },
    fontFamChange: (e) => {
      const value = e.target.value;
      $(".active-text")[0].style.fontFamily = value;
    },
    fontWeightChange: (e) => {
      const value = e.target.value;
      $(".active-text")[0].style.fontWeight = value;
    },
    colorChange: (e) => {
      const value = e.target.value;
      $(".active-text")[0].style.color = value;
    },
    textAlignChange: (e) => {
      $(".active-text")[0].style.textAlign = e.target.id;
    },
    lineHeightChange: (e) => {
      const value = e.target.value;
      if (value < 1) {
        $(".active-text")[0].style.lineHeight = "normal";
      } else {
        $(".active-text")[0].style.lineHeight = value + "px";
      }
    },
  };

  return (
    <div className="text-style-settings-container">
      <div className="text-align">
        <i
          onClick={textStyle.textAlignChange}
          className="fa-solid fa-align-left"
          id="left"
        ></i>
        <i
          onClick={textStyle.textAlignChange}
          className="fa-solid fa-align-center"
          id="center"
        ></i>
        <i
          onClick={textStyle.textAlignChange}
          className="fa-solid fa-align-right"
          id="right"
        ></i>
      </div>

      <input
        onChange={textStyle.lineHeightChange}
        placeholder="auto"
        id="line-height"
        type="number"
      ></input>

      <select onChange={textStyle.fontFamChange} id="font-fam">
        <option value="Segoe UI" style={{ fontFamily: "Segoe UI" }}>
          Segoe UI
        </option>
        <option value="Courier New" style={{ fontFamily: "Courier New" }}>
          Courier New
        </option>
        <option value="Arial" style={{ fontFamily: "Arial" }}>
          Arial
        </option>
        <option
          value="Times New Roman"
          style={{ fontFamily: "Times New Roman" }}
        >
          Times New Roman
        </option>
        <option value="Calibri" style={{ fontFamily: "Calibri" }}>
          Calibri
        </option>
        <option value="Helvetica" style={{ fontFamily: "Helvetica" }}>
          Helvetica
        </option>
        <option value="Cambria" style={{ fontFamily: "Cambria" }}>
          Cambria
        </option>
        <option value="Verdana" style={{ fontFamily: "Verdana" }}>
          Verdana
        </option>
        <option
          value="Franklin Gothic Medium"
          style={{ fontFamily: "Franklin Gothic Medium" }}
        >
          Franklin Gothic Medium
        </option>
      </select>

      <select onChange={textStyle.fontWeightChange} id="font-weight">
        <option value="100" style={{ fontWeight: 100 }}>
          Thin
        </option>
        <option value="200" style={{ fontWeight: 200 }}>
          Extra Light
        </option>
        <option value="300" style={{ fontWeight: 300 }}>
          Light
        </option>
        <option value="400" style={{ fontWeight: 400 }}>
          Regular
        </option>
        <option value="500" style={{ fontWeight: 500 }}>
          Medium
        </option>
        <option value="600" style={{ fontWeight: 600 }}>
          Semi Bold
        </option>
        <option value="700" style={{ fontWeight: 700 }}>
          Bold
        </option>
        <option value="800" style={{ fontWeight: 800 }}>
          Extra Bold
        </option>
      </select>
      <select onChange={textStyle.fontSizeChange} id="font-size">
        <option value="10">10</option>
        <option value="11">11</option>
        <option value="12">12</option>
        <option value="13">13</option>
        <option value="14">14</option>
        <option value="15">15</option>
        <option value="16">16</option>
        <option value="20">20</option>
        <option value="24">24</option>
        <option value="32">32</option>
        <option value="36">36</option>
        <option value="40">40</option>
        <option value="48">48</option>
        <option value="64">64</option>
        <option value="96">96</option>
        <option value="128">128</option>
      </select>
      <input
        onChange={textStyle.colorChange}
        id="text-color"
        type="color"
      ></input>
    </div>
  );
}
