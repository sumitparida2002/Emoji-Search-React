import React from "react";

import emojiList from "../emojiList.json";

const Results = ({ search }) => {
  const someEmojis = emojiList.slice(0, 20);
  return (
    <div>
      {someEmojis.map((emoji) => {
        const codePointHex = emoji.symbol.codePointAt(0).toString(16);
        const src = `//cdn.jsdelivr.net/emojione/assets/png/${codePointHex}.png`;
        <div>
          <img alt={emoji.title} src={src} />
          <span className="title">{emoji.title}</span>
        </div>;
      })}
    </div>
  );
};

export default Results;
