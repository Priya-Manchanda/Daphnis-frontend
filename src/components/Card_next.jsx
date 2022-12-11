import React from "react";
import Report from "../Report";
import Design_next from "./Design_next";
function Card_next() {
  return (
    <div className="first_div">
      {Report.map((report) => {
        return (
          <Design_next
            category={report.category}
            brand={report.brand}
            buiseness={report.buiseness}
            strength={report.strength}
            manufac={report.manufac}
          />
        );
      })}
    </div>
  );
}

export default Card_next;
