import React from "react";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Demo from "./components/Demo/Demo";
import FAQ from "./components/FAQ/FAQ";
import Footer from "./components/Footer/Footer";
import CTA from "./components/CTA/CTA";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Hero />
      <Feature />
      <Demo />
      <CTA />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
