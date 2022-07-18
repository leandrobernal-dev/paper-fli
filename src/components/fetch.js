import React from "react";
import $ from "jquery";

export default function FetchDataOnload(
  category,
  memeApi,
  inspirationalApi,
  updateAllImages
) {
  if (category.category == "inspirational") {
    const headers = {
      headers: {
        Authorization: process.env.REACT_APP_PEXELS_API_KEY,
      },
    };
    run();
    function run() {
      fetchData(inspirationalApi, headers)
        .then((data) => {
          updateAllImages(data.photos);
          $("#generate-new")[0].classList.remove("unclickable");
          // console.log(allImages);
        })
        .catch(function (error) {
          // run();
        });
    }
  }
  // if category is set to memes
  else if ((category.category = "meme")) {
    fetchData(memeApi)
      .then((data) => {
        updateAllImages(data.data.memes);
        $("#generate-new")[0].classList.remove("unclickable");
        // console.log(allImages);
      })
      .catch(function (error) {
        // $("#generate-new")[0].classList.add("unclickable-red");
        // console.log(
        //   "Initially " + (window.navigator.onLine ? "on" : "off") + "line"
        // );
      });
  }

  function fetchData(linkApi, headers) {
    return fetch(linkApi, headers).then(status).then(json);

    function status(response) {
      if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
      } else {
        return Promise.reject(new Error(response.statusText));
      }
    }
    function json(response) {
      return response.json();
    }
  }
}
// function generate() {
//   fetch(factsApi, {
//     headers: {
//       "X-Api-Key": "lxflaOkvY8zOUY9E8xzxbg==82zfuH7tgnZAgkKc",
//     },
//   })
//     .then((response) => response.json())
//     .then((result) => console.log(result[0].fact));
// }
