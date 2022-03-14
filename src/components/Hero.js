import React from "react";
import Icon from "./Icon";
import Button from "./Button";
const Hero = ({ title, description, button, link, icon }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <div className="hero__inner__text">
            <h1>{title}</h1>
            <p>{description}</p>
            <Button></Button>
          </div>

          <Icon icon={icon} />
        </div>
      </div>
    </section>
  );
};

export default Hero;
