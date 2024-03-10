import React from "react";
import "./alert.css";
const Alert = (props) => {
    function capitalize(txt) {
        txt = txt.toLowerCase();
        return txt.charAt(0).toUpperCase() + txt.slice(1);
    }
    return (
        props.alert && (
            <>
                <div className="alert-container">
                    <div
                        className={`alert alert-${props.alert.type} max-w-sm max-h-sm`}
                    >
                        <div className="flex flex-col">
                            <span>
                                {capitalize(props.alert.type)} :{" "}
                                {props.alert.msg}
                            </span>
                        </div>
                    </div>
                </div>
            </>
        )
    );
};

export default Alert;
