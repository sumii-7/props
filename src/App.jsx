import { useState } from "react";
import Grandfather from "./component/Grandfather";

function App() {
  const [legacyA, setLegacyA] = useState("legacyC");
  const [legacyB, setLegacyB] = useState("legacyB");

  // const textChange = () => {
  //   setLegacyB("legacyB edit");
  // };

  return (
    <>
      <div>
        <Grandfather
          legacyA={legacyA}
          legacyB={legacyB}
          setLegacyB={setLegacyB}
        />
      </div>
    </>
  );
}

export default App;
