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
      <Header />
      <Hero/>
     <About/>
     <Projects/>
     <Contact/>
     <Footer/>
     <Experience/>
      {/* Other sections will go here later */}
    </div>
  );
}

export default App;
