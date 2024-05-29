import React from "react";
import Father from "./Father";

const Grandfather = ({ legacyA, legacyB, setLegacyB }) => {
  return (
    <div>
      <Father legacyA={legacyA} legacyB={legacyB} setLegacyB={setLegacyB} />
    </div>
  );
};

export default Grandfather;
