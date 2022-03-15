import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import TrimResult from "./TrimResult";

const Form = () => {
  const [value, setValue] = useState({
    main_input: "",
  });
  const [items, setItems] = useState([]);

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
      .then((data) => {
        setItems([...items, data]);
      });
  };

  const handleCopy = (e) => {
    console.log("copy", e);
  };

  return (
    <>
      <form className="form__inner">
        <Input
          onChange={handleChange}
          id="main_input"
          placeholder="Shorten a link here..."
        />
        <Button onClick={handleSubmit} text="Shorten it" />
        <Icon className="form__icon" icon="shorten_mobile" />
      </form>
      {items && (
        <div className="form__results">
          {items.map((item) => (
            <TrimResult onClick={handleCopy} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
