import React from "react";

const Grandson = ({ legacyA, legacyB, setLegacyB }) => {
  const textChange = () => {
    setLegacyB("legacyB edit");
  };
  return (
    <div>
      <div>{legacyA}</div>
      <div>{legacyB}</div>
      <button onClick={textChange}>ㅈㅔ발</button>
    </div>
  );
};

export default Grandson;
