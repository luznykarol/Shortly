import React from "react";
import Button from "./Button";
const Cta = ({ text, button, link }) => {
  return (
    <section className="cta">
      <div className="container">
        <h2>{text}</h2>
        <Button text={button} link={link} />
      </div>
    </section>
  );
};

export default Cta;
