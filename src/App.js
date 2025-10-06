import React from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About"
import Contact from "./components/Contact"
import Projects from "./components/Projects"



function App() {
  return (
    <div>
      <Header />
      <Hero/>
     <About/>
      {/* Other sections will go here later */}
    </div>
  );
}

export default App;
