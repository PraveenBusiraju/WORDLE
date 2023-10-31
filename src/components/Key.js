import React, { useContext } from "react";
import { AppContext } from "../App";

function Key({ keyVal }) {
  const { gameOver, onSelectLetter, onDelete, onEnter } =
    useContext(AppContext);

  const selectLetter = () => {
    if (gameOver.gameOver) return;
    if (keyVal === "TRY") {
      onEnter();
    } else if (keyVal === "DEL") {
      onDelete();
    } else {
      onSelectLetter(keyVal);
    }
  };
  return (
    <div
      className="key"
      onClick={selectLetter}
    >
      {keyVal}
    </div>
  );
}

export default Key;