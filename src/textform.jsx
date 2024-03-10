import React, { useState } from "react";
import "./textForm.css";
import Summary from "./summary";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [disabledBtn, setDisabledBtn] = useState("disabled");

  function convertUP() {
    setText(text.toUpperCase());
  }

  function convertLW() {
    setText(text.toLowerCase());
  }

  function handlechange(event) {
    setText(event.target.value);

    if (event.target.value.trim() === "") {
      setDisabledBtn("disabled");
    } else {
      setDisabledBtn("");
      setText(event.target.value);
    }
  }

  function clear() {
    setText("");
    setDisabledBtn("disabled");
  }

  function rncase() {
    const cases = ["upper", "lower"];
    let newText = "";
    for (let i = 0; i < text.length; i++) {
      const randomItem = cases[Math.floor(Math.random() * cases.length)];
      if (randomItem === "upper") {
        newText += text[i].toUpperCase();
      } else {
        newText += text[i].toLowerCase();
      }
    }
    setText(newText);
  }

  function copytxt() {
    const textarea = document.createElement("textarea");
    textarea.value = text;
    textarea.style.position = "fixed";
    textarea.style.opacity = 0;
    document.body.appendChild(textarea);
    textarea.select();
    try {
      const success = document.execCommand("copy");
      if (success) {
        props.showAlert("Text copied to clipboard", "success");
      } else {
        props.showAlert("Error occurred while copying to clipboard", "error");
      }
    } catch (error) {
      props.showAlert("Error occurred while copying to clipboard", "error");
    } finally {
      document.body.removeChild(textarea);
    }
  }

  let characters = text.length;
  let finalText = text.trim();
  let wordsArray = finalText.split(/\s+/);
  wordsArray = wordsArray.filter((word) => word !== "");
  let words = wordsArray.length;

  const wordsPerMinute = 120;
  const readingTimeInMinutes = words / wordsPerMinute;
  const roundedReadingTime = parseFloat(readingTimeInMinutes.toFixed(2));
  const finalReadingTime = roundedReadingTime;

  const color = {
    background: props.primaryColor,
  };

  const border = {
    border: `0.01px solid ${props.primaryColor}`,
  };

  return (
    <div
      className={`container textarea-container ${props.mode}`}
      style={{ maxWidth: "100%" }}
    >
      <h1 className="heading">{props.heading}</h1>
      <textarea
        className="textarea textarea-block textarea-main textarea-solid textarea-primary"
        id="textarea"
        placeholder="Enter your text here"
        value={text}
        onChange={handlechange}
        style={border}
      />
      <div className="buttons">
        <button
          className={`btn btn-outline-primary btn-block btn-solid-primary btn-md ${disabledBtn}`}
          onClick={convertUP}
          style={color}
        >
          UPPERCASE
        </button>
        <button
          className={`btn btn-outline-primary btn-block btn-solid-primary btn-md ${disabledBtn}`}
          onClick={convertLW}
          style={color}
        >
          lowercase
        </button>
        <button
          className={`btn btn-outline-primary btn-block btn-solid-error btn-md danger ${disabledBtn}`}
          onClick={clear}
          style={color}
        >
          Clear
        </button>
        <button
          className={`btn btn-outline-primary btn-block btn-solid-primary btn-md ${disabledBtn}`}
          onClick={rncase}
          style={color}
        >
          rANdoM CAsE
        </button>
        <button
          className={`btn btn-outline-primary btn-block btn-solid-primary btn-md ${disabledBtn}`}
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
        disabled={disabledBtn}
      />
    </div>
  );
}
