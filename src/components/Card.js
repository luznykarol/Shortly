import React from "react";
import Icon from "./Icon";

const Card = ({ item }) => {
  const { title, description, icon } = item;
  return (
    <article className="card">
      <Icon icon={icon} />
      <div className="card__inner">
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
    </article>
  );
};

export default Card;
