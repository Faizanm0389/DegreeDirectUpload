import React, { useState } from "react";
import Button from "./Button"; 

function Interface() {
  return (
    <div>
      <div className="interface">
      <h1>Type your McMaster CS Course Name </h1>
      <p>Ex. "COMPSCI 2C03"</p>
      </div>
      <Button />
    </div>
  );
}

export default Interface;
