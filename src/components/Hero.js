import React from "react";
import Icon from "./Icon";
import Button from "./Button";

const Hero = ({ title, description, button, link, icon }) => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero__inner">
          <h1 className="hero__inner__title">{title}</h1>
          <p className="hero__inner__description">{description}</p>
          <Button rounded button="Get Started" />
        </div>
        <Icon className="hero__icon" icon={icon} />
      </div>
    </section>
  );
};

export default Hero;
