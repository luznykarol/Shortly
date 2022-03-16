import React, { useState } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { header } from "../data/header";
const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!burgerActive);
  };

  return (
    <header className="header">
      <div className="container">
        <Icon className="header__logo" icon="logo" />
        <div
          className={
            burgerActive
              ? "header__inner header__inner--active"
              : "header__inner"
          }>
          <nav className="header__nav">
            {header.map((item, i) => {
              return (
                <a
                  key={`header-link-${i}`}
                  className="header__link"
                  href={item.link}>
                  {item.text}
                </a>
              );
            })}
          </nav>
          <div className="header__inner__right">
            <a className="header__link" href="/">
              Login
            </a>
            <Button oval className="header__button" text="Sign Up" />
          </div>
        </div>
        <button onClick={handleBurgerClick} className="header__burger">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
