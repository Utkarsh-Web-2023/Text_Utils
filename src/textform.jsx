import React, { useState } from "react";
import "./textForm.css";
import Summary from "./summary";

export default function TextForm(props) {
  function convertUP() {
    setText(text.toUpperCase());
  }
  function convertLW() {
    setText(text.toLowerCase());
  }
  function handlechange(event) {
    // console.log("On Change");
    setText(event.target.value);
  }
  function clear() {
    setText("");
  }
  function rncase() {
    const cases = ["upper", "lower"];
    function getRandomItemFromArray(array) {
      // Generate a random index within the array length
      const randomIndex = Math.floor(Math.random() * array.length);
      // Return the item at the random index
      return array[randomIndex];
    }
    let newText = "";
    // console.log(randomItem);

    // let i;
    for (let i = 0; i < text.length; i++) {
      const randomItem = getRandomItemFromArray(cases);
      // console.log(text, text[i]);
      let textIndex = text[i]; // Changed variable name to camelCase convention
      if (randomItem === "upper") {
        newText += textIndex.toUpperCase();
      } else {
        newText += textIndex.toLowerCase();
      }
    }

    setText(newText);
  }
  function copytxt() {
    // Create a new textarea element to hold the text
    const textarea = document.createElement("textarea");

    // Set the value of the textarea to the specified text
    textarea.value = text;

    // Make the textarea invisible
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;

    // Append the textarea to the document body
    document.body.appendChild(textarea);

    // Select the text within the textarea
    textarea.select();

    try {
      // Execute the copy command
      const success = document.execCommand("copy");
      if (success) {
        // console.log("Text copied to clipboard:", text);
        props.showAlert("Text copied to clipboard", "success");
      } else {
        // console.error("Unable to copy text to clipboard");
        props.showAlert("Error Occured While Copying to clipboard", "error");
      }
    } catch (error) {
      // console.error("Error copying text:", error);
      props.showAlert("Error Occured While Copying to clipboard", "error");
    } finally {
      // Remove the textarea from the document body
      document.body.removeChild(textarea);
    }
  }
  const [text, setText] = useState("");
  let characters = text.length;

  // Remove leading and trailing white spaces
  let finalText = text.trim();

  // Split the text by spaces
  let wordsArray = finalText.split(/\s+/);

  // Filter out empty strings from the array
  wordsArray = wordsArray.filter((word) => word !== "");

  // Return the length of the filtered array, which represents the number of words
  let words = wordsArray.length;

  const color = {
    background: props.primaryColor,
  };
  const border = {
    border: `0.01px solid ${props.primaryColor}`,
  };
  let finalReadingTime;

  // Average reading speed in words per minute (WPM)
  const wordsPerMinute = 120;

  // Calculate the number of words in the text

  // Calculate the estimated reading time in minutes
  const readingTimeInMinutes = words / wordsPerMinute;

  // Round up the reading time to the nearest minute
  const roundedReadingTime = parseFloat(readingTimeInMinutes.toFixed(2));
  finalReadingTime = roundedReadingTime;

  return (
    <div className={`container  textarea-container ${props.mode} `}>
      <h1 className="heading">{props.heading}</h1>
      <textarea
        className="textarea  textarea-block textarea-main textarea-solid textarea-primary"
        id="textarea"
        placeholder="Enter your text here"
        value={text}
        onChange={handlechange}
        style={border}
      />
      <div className="buttons ">
        <button
          className="btn btn-outline-primary btn-block btn-solid-primary btn-md"
          onClick={convertUP}
          style={color}
        >
          UPPERCASE
        </button>
        <button
          className="btn btn-outline-primary btn-block btn-solid-primary btn-md"
          onClick={convertLW}
          style={color}
        >
          lowercase
        </button>
        <button
          className="btn btn-outline-primary btn-block btn-solid-primary btn-md danger"
          onClick={clear}
          style={color}
        >
          Clear
        </button>
        <button
          className="btn btn-outline-primary btn-block btn-solid-primary btn-md"
          onClick={rncase}
          style={color}
        >
          rANdoM CAsE
        </button>
        <button
          className="btn btn-outline-primary btn-block btn-solid-primary btn-md"
          onClick={copytxt}
          style={color}
        >
          Copy Text
        </button>
      </div>
      <Summary
        words={words}
        character={characters}
        readingTime={finalReadingTime}
      />
    </div>
  );
}
