import React, { useState } from "react";
import Button from "./Button";

const TrimResult = ({ item }) => {
  const [textCopied, setTextCopied] = useState(false);
  const { result } = item;

  async function copyTextToClipboard(text) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopy = () => {
    copyTextToClipboard(result?.short_link).then(() => {
      setTextCopied(true);
      setTimeout(() => {
        setTextCopied(false);
      }, 1500);
    });
  };

  return (
    <article className="trim__item">
      <div className="trim__item__top">
        <div className="trim__item__top__result">{result?.original_link}</div>
      </div>
      <div className="trim__item__bottom">
        <div className="trim__item__bottom--result">{result?.short_link};</div>
        <Button
          active={textCopied && true}
          fullWidth
          onClick={handleCopy}
          text={textCopied ? "Copied!" : "Copy"}
        />
      </div>
    </article>
  );
};

export default TrimResult;
