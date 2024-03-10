import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "./navbar";
import TextForm from "./textform";
import Darkmode from "./darkmode";
import "./style.css";
import Alert from "./alert";

const App = () => {
  const [mode, setMode] = useState("dark");
  const [alert, setAlert] = useState(null);
  const [primaryColor, setPrimaryColor] = useState("#007bff");

  function setBlueColor() {
    setPrimaryColor("#007bff");
  }

  function setGreenColor() {
    setPrimaryColor("#28a745");
  }

  function setRedColor() {
    setPrimaryColor("#dc3545");
  }

  function setYellowColor() {
    setPrimaryColor("#DAA520");
  }

  function showAlert(message, type) {
    setAlert({
      msg: message,
      type: type,
    });
    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }

  function toggleMode() {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#121212";
      document.body.style.color = "#efefef";
    } else {
      setMode("light");
      document.body.style.backgroundColor = "#FFFAFA";
      document.body.style.color = "#000";
      document.textarea.style.backgroundColor = "#efefef";
    }
  }

  return (
    <React.StrictMode>
      <Navbar
        title="Text Utils"
        mode={mode}
        primaryColor={primaryColor}
        setBlueColor={setBlueColor}
        setGreenColor={setGreenColor}
        setRedColor={setRedColor}
        setYellowColor={setYellowColor}
      />
      <TextForm
        heading="Text Utilities"
        mode={mode}
        showAlert={showAlert}
        primaryColor={primaryColor}
        setBlueColor={setBlueColor}
        setGreenColor={setGreenColor}
        setRedColor={setRedColor}
        setYellowColor={setYellowColor}
      />
      <Alert alert={alert} />
      <Darkmode
        icon={mode === "light" ? "fas fa-moon" : "fas fa-sun"}
        mode={mode}
        toggleMode={toggleMode}
        primaryColor={primaryColor}
        
      />
    </React.StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
