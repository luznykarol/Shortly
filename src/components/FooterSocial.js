import React from "react";
import Icon from "./Icon";
import { social } from "../data/social";

const FooterSocial = () => {
  return (
    <div className="footer__social">
      {social.map((item, i) => (
        <a
          key={`footer-social-${i}`}
          href={item.link}
          className="footer__social__item">
          <Icon className="footer__icon" icon={item.icon} />
        </a>
      ))}
    </div>
  );
};

export default FooterSocial;
