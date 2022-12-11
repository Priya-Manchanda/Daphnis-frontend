import React from "react";

function Design_next(props) {
  return (
      <div className="card new">
        <div className="card-header">Related category</div>
        <div className="card-body">
          <p>{props.category}</p>
          <p>{props.brand}</p>
          <p>{props.buiseness}</p>
          <p>{props.strength}</p>
          <p>{props.manufac}</p>
        </div>
      </div>
  );
}

export default Design_next;
