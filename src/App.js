import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import { cards } from "./data/cards";
import CardItem from "./components/CardItem";
import Hero from "./components/Hero";
import Section from "./components/Section";
import Form from "./components/Form";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Hero
        title="More than just shorter links"
        description="Build youre brand's recognition and get detailed insights on how your links are performing"
        button="Get started"
        icon="working"
        link="/"
      />
      <Section className="form">
        <Form />
      </Section>
      <Section
        className="cards"
        title="Advanced Statistics"
        description="Track how your links are performing across the web with our advanced statistics dashboard.">
        <div className="cards__container">
          {cards.map((item) => (
            <CardItem item={item} />
          ))}
        </div>
      </Section>

      <Cta text="Boost your links today" button="Get started" link="/" />
      <Footer />
    </div>
  );
}

export default App;
