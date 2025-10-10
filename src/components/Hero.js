import React from "react";
function Hero(){
return(
<section id = "home" className = "bg-gray-100 min-h-screen flex items-center">
    <div className= "container mx-auto px-6 text-center">
    <h1 className = "text-5xl font-bold mb-4">Hi, I'm Sudip Sharma</h1>
    <p className="text-xl mb-6">
  I'm a web developer building modern, responsive web applications using React, JavaScript, and Tailwind CSS.
</p>
   
    <a href = "#projects" className = "bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">
        View my work
    </a>
    </div>
    </section>
);
}

export default Hero;