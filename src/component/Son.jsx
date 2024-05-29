import React from "react";
import Grandson from "./Grandson";

const Son = ({ legacyA, legacyB, setLegacyB }) => {
  return (
    <div>
      <div>
        <Grandson legacyA={legacyA} legacyB={legacyB} setLegacyB={setLegacyB} />
      </div>
    </div>
  );
};

export default Son;
