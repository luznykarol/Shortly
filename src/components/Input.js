import React from "react";

const Input = ({ id, placeholder }) => {
  return (
    <input
      className="input"
      name={id}
      id={id}
      type="text"
      placeholder={placeholder}></input>
  );
};

export default Input;
