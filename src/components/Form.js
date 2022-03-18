import React, { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import Icon from "./Icon";
import TrimResult from "./TrimResult";

const Form = () => {
  const [value, setValue] = useState({
    main_input: "",
  });
  const [items, setItems] = useState(
    JSON.parse(localStorage.getItem("shortened_links") || "[]")
  );
  const [error, setError] = useState(false);

  const handleChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };

  const linkExists = (value) => {
    return items.some((el) => {
      return el.result.original_link === value.main_input;
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(`https://api.shrtco.de/v2/shorten?url=${value.main_input}`, {
      method: "POST",
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        if (data.ok) {
          if (linkExists(value)) {
            setError("This link was already shortened.");
          } else {
            setError();
            setItems([...items, data]);
            localStorage.setItem(
              "shortened_links",
              JSON.stringify([...items, data])
            );
          }
        } else {
          setError(data.error);
        }
      });
  };

  return (
    <>
      <form className="form__inner">
        <Input
          error={error}
          onChange={handleChange}
          id="main_input"
          placeholder="Shorten a link here..."
        />
        <Button fullWidth onClick={handleSubmit} text="Shorten it" />
        <Icon className="form__icon" icon="shorten_mobile" />
      </form>
      {items && (
        <div className="form__results">
          {items.map((item, i) => (
            <TrimResult key={`trim-result-${i}`} item={item} />
          ))}
        </div>
      )}
    </>
  );
};

export default Form;
