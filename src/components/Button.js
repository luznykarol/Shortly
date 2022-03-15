import React from "react";

const Button = ({
  type = "button",
  iconOnly = false,
  disabled = false,
  onClick,
  fullWidth,
  text,

  className = "",
}) => {
  const styles = `
  btn  ${className} ${iconOnly ? "button--icon-only" : ""} ${
    fullWidth ? "button--full-width" : ""
  }`;

  return (
    <button
      type={type}
      className={styles}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
