import React from "react";
import Button from "./Button";

const TrimResult = ({ item, onClick }) => {
  const { result } = item;

  console.log("item", item);
  return (
    <article className="trim__item">
      <div className="trim__item__top">
        <div className="trim__item__top--result">{result.original_link}</div>
      </div>
      <div className="trim__item__bottom">
        <div className="trim__item__bottom--result">{result.short_link};</div>
        <Button fullWidth onClick={onClick} text="Copy" />
      </div>
    </article>
  );
};

export default TrimResult;