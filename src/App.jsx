import React from "react";
import Notice from "./components/Notice/Notice";
import NavBar from "./components/NavBar/NavBar";
import Hero from "./components/Hero/Hero";
import Feature from "./components/Feature/Feature";
import Escrow from "./components/Escrow/Escrow";
import Demo from "./components/Demo/Demo";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Notice />
      <NavBar />
      <Hero />
      <Feature />
      <Escrow />
      <Demo />
      <Footer />
    </div>
  );
}

export default App;
