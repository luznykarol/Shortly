import React from "react";
import Icon from "./Icon";
import Button from "./Button";
import { header } from "../data/header";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <Icon className="header__logo" icon="logo" />
        <div className="header__inner">
          <nav className="header__nav">
            {header.map((item) => {
              return (
                <a className="header__link" href={item.link}>
                  {item.text}
                </a>
              );
            })}
          </nav>
          <div className="header__inner__right">
            <a className="header__link" href="/">
              Login
            </a>
            <Button text button="Sign Up" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
