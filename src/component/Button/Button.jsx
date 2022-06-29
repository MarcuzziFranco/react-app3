import React from "react";
import "./style.css";

function Button({ value, event }) {
  return (
    <input className="Button" type="button" onClick={event} value={value} />
  );
}

export default Button;
