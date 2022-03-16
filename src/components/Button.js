import React from "react";

const Button = ({
  disabled,
  onClick,
  fullWidth,
  text,
  active,
  className = "",
}) => {
  const styles = `
  btn  ${className} ${active && "btn--active"} ${
    fullWidth ? "btn--full-width" : ""
  }`;

  return (
    <button
      type="button"
      className={styles}
      disabled={disabled}
      onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;
