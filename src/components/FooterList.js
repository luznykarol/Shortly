import React from "react";

const FooterList = ({ item }) => {
  const { title, items } = item;
  return (
    <div className="footer__list">
      <div className="footer__list__header">{title}</div>
      {items.map((item) => (
        <a key={item.id} className="footer__list__link" href={item.link}>
          {item.text}
        </a>
      ))}
    </div>
  );
};

export default FooterList;
