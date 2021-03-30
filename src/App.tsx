import React from "react";
import "./App.css";
import Header from "./header/Header";
import Main from "./main/Main";
import League from "./league/League";
import ContactForm from "./contactForm/ContactForm";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <League />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
