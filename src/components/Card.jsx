import React from "react";
import Value from "../Value";
import Design from "./Design";
import "../App.css";
function Card() {
  return (
    <div className="App second_div">
      {Value.map((value) => {
        return (
          <Design
            img={value.img}
            text={value.text}
            price={value.price}
            stripe={value.stripe}
            company={value.company}
            location={value.location}
            contact={value.contact}
          />
        );
      })}
    </div>
  );
}

export default Card;
