import React from "react";

const Input = ({ onChange, id, placeholder }) => {
  return (
    <input
      onChange={onChange}
      className="input"
      name={id}
      id={id}
      type="text"
      placeholder={placeholder}></input>
  );
};

export default Input;
