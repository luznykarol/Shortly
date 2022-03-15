import React from "react";

const Section = ({ className, children, id, title, description }) => {
  return (
    <section className={className} id={id}>
      <div className="container">
        <div className="section__text">
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;
