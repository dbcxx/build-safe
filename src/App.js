import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Header from "./components/home/Header";
import Section1 from "./components/about/Section1";
import Section2 from "./components/about/Section2";
import Section3 from "./components/about/Section3";
import Contact from "./components/contact/Contact";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Header />
      <Section1 />
      <Section2 />
      <Section3 />
      <Contact />
    </BrowserRouter>
  );
}

export default App;
