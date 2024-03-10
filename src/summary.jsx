import React from "react";
import "./summary.css";
export default function Summary(props) {
    return (
        <>
            <div className="container">
                <h2 className="summary-heading">Your Text Summary</h2>
                <div className="summary">
                    <p style={{ padding: "3px 5px" }}>
                        Words : {props.words}, Characters: {props.character} ,
                        Time for Reading: {props.readingTime} Minutes
                    </p>
                </div>
            </div>
        </>
    );
}
