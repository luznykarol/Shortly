import React from "react";
import Icon from "./Icon";

const CardItem = ({ item }) => {
  const { title, description, icon } = item;
  return (
    <article className="card">
      <div className="card__icon">
        <Icon className="card__icon__icon" icon={icon} />
      </div>
      <div className="card__inner">
        <h3 className="card__title">{title}</h3>
        <p className="card__description">{description}</p>
      </div>
    </article>
  );
};

export default CardItem;
