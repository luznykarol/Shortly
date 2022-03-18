import React, { useState, useEffect } from "react";
import Icon from "./Icon";
import Button from "./Button";
import { header } from "../data/header";

const Header = () => {
  const [burgerActive, setBurgerActive] = useState(false);
  const [scroll, setScroll] = useState(false);

  const handleBurgerClick = () => {
    setBurgerActive(!burgerActive);
  };

  const handleScroll = () => setScroll(window.scrollY > 30);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const headerClass = scroll ? "header header--active" : "header";
  const burgerClass = burgerActive
    ? "header__burger header__burger--active"
    : "header__burger";
  const headerInnerClass = burgerActive
    ? "header__inner header__inner--active"
    : "header__inner";

  return (
    <header className={headerClass}>
      <div className="container">
        <Icon className="header__logo" icon="logo" />
        <div className={headerInnerClass}>
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
        <button onClick={handleBurgerClick} className={burgerClass}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
};

export default Header;
