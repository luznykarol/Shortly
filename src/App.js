import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import { cards } from "./data/cards";
import CardItem from "./components/CardItem";
import Hero from "./components/Hero";
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
      <section className="cards">
        {cards.map((item) => (
          <CardItem item={item} />
        ))}
      </section>
      <Cta text="Boost your links today" button="Get started" link="/" />
      <Footer />
    </div>
  );
}

export default App;
