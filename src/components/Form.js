import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
const Form = () => {
  const [value, setValue] = useState({
    main_input: "",
  });

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    fetch(`https://api.shrtco.de/v2/shorten?url=${value.main_input}`, {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => console.log(data));
  };

  return (
    <form className="form__inner">
      <Input
        onChange={handleChange}
        id="main_input"
        placeholder="Shorten a link here..."
      />
      <Button onClick={handleSubmit} text="Shorten it" />
      <Icon className="form__icon" icon="shorten_mobile" />
    </form>
  );
};

export default Form;
