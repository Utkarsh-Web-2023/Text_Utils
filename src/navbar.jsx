import React from "react";
import PropTypes from "prop-types";
import "./navbar.css";

const Navbar = (props) => {
  const styles = {
    backgroundColor: props.primaryColor,
    color: "white",
  };

  const blue = {
    backgroundColor: "#007bff",

    border:
      props.primaryColor === "#007bff" ? "2px solid #ccc" : "0.5px solid #ccc",

    width: props.primaryColor === "#007bff" ? "32px" : "28px",
    height: props.primaryColor === "#007bff" ? "32px" : "28px",

    opacity: props.primaryColor === "#007bff" ? "1" : "0.5",
  };

  const green = {
    backgroundColor: "#28a745",

    border:
      props.primaryColor === "#28a745" ? "2px solid #ccc" : "0.5px solid #ccc",

    width: props.primaryColor === "#28a745" ? "32px" : "28px",
    height: props.primaryColor === "#28a745" ? "32px" : "28px",

    opacity: props.primaryColor === "#28a745" ? "1" : "0.75",
  };

  const red = {
    backgroundColor: "#dc3545",

    border:
      props.primaryColor === "#dc3545" ? "2px solid #ccc" : "0.5px solid #ccc",

    width: props.primaryColor === "#dc3545" ? "32px" : "28px",
    height: props.primaryColor === "#dc3545" ? "32px" : "28px",

    opacity: props.primaryColor === "#dc3545" ? "1" : "0.75",
  };

  const yellow = {
    backgroundColor: "#DAA520",

    border:
      props.primaryColor === "#DAA520" ? "2px solid #ccc" : "0.5px solid #ccc",

    width: props.primaryColor === "#DAA520" ? "32px" : "28px",
    height: props.primaryColor === "#DAA520" ? "32px" : "28px",
    opacity: props.primaryColor === "#DAA520" ? "1" : "0.75",
  };

  return (
    <div
      style={styles}
      className={`navbar navbar-floating navbar-bordered navbar-rounded navbar-glass navbar-${props.mode}`}
    >
      <div className="navbar-start">
        <a
          className="navbar-item"
          style={{ fontSize: "1.5rem", color: "#efefef" }}
        >
          {props.title}
        </a>
      </div>
      <div className="navbar-end">
        <a
          className="navbar-item blue active"
          style={blue}
          onClick={props.setBlueColor}
        ></a>
        <a
          className="navbar-item green"
          style={green}
          onClick={props.setGreenColor}
        ></a>
        <a
          className="navbar-item red"
          style={red}
          onClick={props.setRedColor}
        ></a>
        <a
          className="navbar-item yellow"
          style={yellow}
          onClick={props.setYellowColor}
        ></a>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  title: PropTypes.string,
  mode: PropTypes.string,
  primaryColor: PropTypes.string,
  setBlueColor: PropTypes.func,
  setGreenColor: PropTypes.func,
  setRedColor: PropTypes.func,
  setYellowColor: PropTypes.func,
};

export default Navbar;
