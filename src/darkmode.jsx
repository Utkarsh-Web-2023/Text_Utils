import React from "react";
import "./darkmode.css";

export default function Darkmode(props) {
    const background = {
        backgroundColor: props.primaryColor,
    };
    document.body.style.overflow = "hidden";
    return (
        <>
            <div
                className={`darkmode-container ${props.mode}`}
                style={background}
            >
                <div className="darkmode-icon">
                    <input type="button" onClick={props.toggleMode} id="mode" />
                    <label htmlFor="mode" className={props.icon}></label>
                </div>
            </div>
        </>
    );
}
