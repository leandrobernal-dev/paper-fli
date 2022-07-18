import React from "react";
import $ from "jquery";

// import { generatePath } from "react-router-dom";

import {
  SaveImage,
  GetNewImage,
  Highlight,
  UpdateSettingsValue,
  Draggables,
} from "./functions";
import FetchDataOnload from "./fetch";
import TextSyleSettings from "./text_style_settings";

export default function Generator() {
  const jokesApi = "https://v2.jokeapi.dev/joke/Any?safe-mode"; // data.setup, data.delivery // Use this
  const quotes = "https://type.fit/api/quotes"; // Use this
  const animeQuotesApi = "https://animechan.vercel.app/api/random"; // Use this
  const factsApi = "https://api.api-ninjas.com/v1/facts?limit=30"; // "X-Api-Key": "process.env.REACT_APP_FACTS_API",

  const inspirationalApi =
    "https://api.pexels.com/v1/search?query=inspirational&per_page=80";
  const memeApi = "https://api.imgflip.com/get_memes";

  // final displayed image
  const [image, updateImage] = React.useState({
    randomImage: "",
  });
  const [allImages, updateAllImages] = React.useState([]);
  const [category, setCategory] = React.useState({ category: "meme" });

  // api fetch
  React.useEffect(() => {
    FetchDataOnload(category, memeApi, inspirationalApi, updateAllImages);
  }, [category.category]);

  React.useEffect(() => {
    $("#generate-new")[0].classList.add("unclickable"); // make the generate new button unclickable until the api is loaded
    $("#" + category.category)[0].classList.add("active-category"); // highlight the current category onload
  }, []);

  // generate new image when loaded
  React.useEffect(() => {
    if (allImages[0] != undefined) {
      GetNewImage(category.category, allImages, updateImage, setPrevImages);
    }
  }, [allImages[0]]);

  // change the category event listener
  function changeCategory(e) {
    $("#generate-new")[0].classList.add("unclickable"); // make the generate button unclickable until the api is being loaded
    document
      .querySelectorAll(".generator-category-options-column li")
      .forEach((el) => {
        el.classList.remove("active-category");
      });
    e.target.classList.add("active-category"); // highlight the current category
    setCategory(() => ({
      category: e.target.id, // set the category to the selected category
    }));
  }

  //
  //
  //
  //
  const [inputOutput, setInputOutput] = React.useState([
    { val: "Text1", input: "Text1", id: 1 },
  ]);

  const [prevImages, setPrevImages] = React.useState([
    { prevImg: "", key: 1 },
    { prevImg: "", key: 2 },
    { prevImg: "", key: 3 },
    { prevImg: "", key: 4 },
  ]);
  const prevImagesElements = prevImages.map((img) => {
    // console.log(prevImages.indexOf(img));
    return (
      <span key={img.key}>
        <img
          onClick={loadPreviousImage}
          id={prevImages.indexOf(img)}
          src={img.prevImg}
        />
      </span>
    );
  });
  function loadPreviousImage(e) {
    console.log(e.target.id);
    updateImage((prevMeme) => {
      return { ...prevMeme, randomImage: e.target.src };
    });
    setPrevImages((prev) => {
      prev[0].prevImg = e.target.src;
      return prev;
    });
  }

  // the h1's in the final output image
  const texts = inputOutput.map((text) => {
    return (
      <div key={text.id} id={text.id} className="text-element">
        <h1>{text.val}</h1>
      </div>
    );
  });
  // the textarea inputs
  const inputs = inputOutput.map((input) => {
    return (
      <textarea
        key={input.id}
        id={input.id}
        onChange={handleTextChange}
        placeholder={input.input}
      ></textarea>
    );
  });
  // textarea event onchange event listener
  function handleTextChange(e) {
    const newArray = inputOutput.map((input) => {
      if (input.id == e.target.id) {
        return {
          ...input,
          val:
            e.target.value.length > 0 ? e.target.value : e.target.placeholder,
        };
      }
      return input;
    });
    setInputOutput(newArray);
  }

  // draggable element
  React.useEffect(() => {
    Draggables();
  });
  // highlight the last text element onload() and when removing and adding new text
  React.useEffect(() => {
    Highlight(inputOutput, UpdateSettingsValue);
  }, [inputOutput.length]);

  // Add text
  function addNewText() {
    const key = inputOutput.length;
    setInputOutput((prevInputs) => {
      return [
        ...prevInputs,
        { val: `Text${key + 1}`, input: `Text${key + 1}`, id: key + 1 },
      ];
    });
  }
  // remove text
  function removeText() {
    setInputOutput((prevInputs) => prevInputs.slice(0, -1));
  }

  return (
    <section className="generator-section">
      <div className="generator-category-options-column">
        <ul>
          <li id="inspirational" onClick={changeCategory}>
            inspirational
          </li>
          <li id="meme" onClick={changeCategory}>
            meme
          </li>
          {/* <li id="quotes">quotes</li> */}
        </ul>
      </div>

      <div className="generator-column">
        {/* prev images */}
        <div className="prev-images-column">
          <div className="prev-images-container">{prevImagesElements}</div>
        </div>
        <div className="columns">
          <div className="column1">
            {/* Style settings  */}
            <TextSyleSettings />
            <div id="output-image" className="output-image">
              <div className="image-container">
                <img
                  src={image.randomImage}
                  className="meme--image"
                  alt="meme"
                />
                {texts}
              </div>
            </div>
          </div>
          <div className="column2">
            <div className="add-remove-buttons">
              <i onClick={addNewText} className="fa-solid fa-plus"></i>
              <i onClick={removeText} className="fa-solid fa-minus"></i>
            </div>

            <div className="text-area-inputs">{inputs}</div>
            <div className="generate-save-buttons">
              {/* <input onChange={displayYourImage} type="file" /> */}
              <button
                id="generate-new"
                onClick={() =>
                  GetNewImage(
                    category.category,
                    allImages,
                    updateImage,
                    setPrevImages
                  )
                }
              >
                Generate New
              </button>
              <button onClick={() => SaveImage()}>Save Image</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
