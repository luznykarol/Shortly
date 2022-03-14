import React from "react";
import Icon from "./Icon";
import { header } from "../data/header";
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Icon icon="logo" />
          <nav>
            {header.map((item) => {
              return <a href={item.link}>{item.text}</a>;
            })}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
