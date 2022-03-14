import React from "react";
import Icon from "./Icon";

const CardItem = ({ item }) => {
  const { title, description, icon } = item;
  return (
    <article className="card">
      <Icon className="card__icon" icon={icon} />
      <div className="card__inner">
        <h4 className="card__title">{title}</h4>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default CardItem;
