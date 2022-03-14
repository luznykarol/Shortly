import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Cta from "./components/Cta";
import "./App.scss";

function App() {
  return (
    <div className="App">
      <Header />
      <Cta text="Boost your links today" button="Get started" link="/" />
      <Footer />
    </div>
  );
}

export default App;
