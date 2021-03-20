import React from 'react';
import './App.css';
import Header from "./header/Header";
import Main from "./main/Main";
import League from "./league/League";
import Reports from "./reports/Reports";
import ContactForm from "./contactForm/ContactForm";
import Footer from "./footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <League />
      <Reports />
      <ContactForm />
      <Footer />

    </div>
  );
}

export default App;
