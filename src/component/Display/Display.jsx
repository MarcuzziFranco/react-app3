import React from "react";
import "./style.css";
function Display({ value }) {
  return (
    <div className="display">
      <label>{value}</label>
    </div>
  );
}

export default Display;
