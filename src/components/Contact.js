import React from "react";

function Contact (){
    return(
        <section id="contact" className="bg-white-100 py-24">
      <div className="max-w-3xl mx-auto px-6 text-center">
        <h2 className = "text-4xl font-bold mb-6"> Contact Me</h2>
        <p className = "text-lg mb-6">
        I'm currently open to opportunities. You can reach me via email or check out my social profiles.

        </p>
        {/* Contact info */}
        <div className = "flex justify-center gap-6 text-blue-600 text-lg">
            <a href = "mailto:sudeepsharma17@gmail.com" target="_blank" rel="noopener noreferer"  className = "hover:underline">Email</a>
            <a href="https://www.linkedin.com/in/sudip-sharma-59a203114/" target="_blank" rel="noopener noreferrer" className="hover:underline">
            LinkedIn
          </a>
          <a href="https://github.com/Sudip0987" target="_blank" rel="noopener noreferer" className="hover:underline">
            GitHub
          </a>
        </div>
    </div>
</section>
    );

}
export default Contact;