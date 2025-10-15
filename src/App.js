import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Contact from "./components/Contact";
import Projects from "./components/Projects";
import Footer from "./components/Footer";
import Experience from "./components/Experience";

function App() {
  return (
    <div>
      <title>Sudip Sharma Portfolio</title>

      <Header />
      <Hero/>
     <About/>
     <Experience/>
     <Projects/>
     <Contact/>
     <Footer/>
      {/* Other sections will go here later */}
    </div>
  );
}

export default App;
