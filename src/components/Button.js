import React from "react";

const Button = ({ button, link, rounded }) => {
  return (
    <a className={rounded ? "btn btn--rounded" : "btn"} href={link}>
      {button}
    </a>
  );
};

export default Button;
