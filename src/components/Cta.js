import React from "react";
import Button from "./Button";
import Icon from "./Icon";
const Cta = ({ text, button, link }) => {
  return (
    <section className="cta">
      <Icon className="cta__icon" icon="arrowDown" />
      <div className="container">
        <div className="cta__inner">
          <h2 className="cta__title">{text}</h2>
          <Button rounded button={button} link={link} />
        </div>
      </div>
    </section>
  );
};

export default Cta;
