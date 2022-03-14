import React from "react";
import Icon from "./Icon";
import FooterSocial from "./FooterSocial";
import FooterList from "./FooterList";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <Icon className="footer__logo" icon="logo" />
        <div className="footer__lists"></div>
        <FooterSocial />
      </div>
    </footer>
  );
};

export default Footer;
