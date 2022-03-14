import React from "react";
import Icon from "./Icon";

const Header = () => {
  console.log("AAAA");
  return (
    <header className="header">
      <div className="container">
        <div className="header__inner">
          <Icon icon="logo" />
          <nav>
            <a>Features</a>
            <a>Pricing</a>
            <a>Resources</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
