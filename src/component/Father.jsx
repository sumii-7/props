import React from "react";
import Son from "./Son";

const Father = ({ legacyA, legacyB, setLegacyB }) => {
  return (
    <div>
      <div>
        <Son legacyA={legacyA} legacyB={legacyB} setLegacyB={setLegacyB} />
      </div>
    </div>
  );
};

export default Father;
