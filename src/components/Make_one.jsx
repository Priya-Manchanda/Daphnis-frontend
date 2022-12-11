import React from "react";
import Card from "./Card";
import Card_next from "./Card_next";

function Make_one() {
  return (
    <div className="float-container">
      <div className="float-child">
        <Card />
      </div>
      <div className="float-child">
        <Card_next />
      </div>
    </div>
  );
}

export default Make_one;
