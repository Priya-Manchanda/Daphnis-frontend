import React from "react";

function Combined() {
  return (
    <div>
      <div className="combine">
        Medical Darphan {">"} Search {">"}{" "}
        <span className="spans">FabiFlu Tablet</span>
      </div>
      <div>
        {" "}
        <form className="d-flex combine">
          <input
            type="text"
            placeholder="Paracetamol"
          />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="combine">Paracetomol (128)products</div>
    </div>
  );
}

export default Combined;
