import React from "react";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
const Form = () => {
  const handleClick = (e) => {
    console.log(e);
  };
  return (
    <form className="form__inner">
      <Input placeholder="Shorten a link here..." />
      <Button onClick={handleClick} text="Shorten it" />
      <Icon className="form__icon" icon="shorten_mobile" />
    </form>
  );
};

export default Form;
