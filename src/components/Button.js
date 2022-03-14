import React from "react";

const Button = ({ button, link }) => {
  return (
    <a className="button" href={link}>
      {button}
    </a>
  );
};

export default Button;
