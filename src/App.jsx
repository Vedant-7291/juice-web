import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Details from "./components/Details";
import OrderForm from "./components/OrderForm";
import About from "./components/About";
import Menu from "./components/Menu";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Details />
      <OrderForm />
      <About />
      <Menu />
      <Footer />
    </div>
  );
}

export default App;
