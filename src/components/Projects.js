import React from "react";

function Projects() {
  return (
    <section id="projects" className="bg-gray-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Grid of projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {/* Project Card 1 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Project One</h3>
            <p className="text-gray-700 mb-4">
              Short description of the project goes here. What it does and technologies used.
            </p>
            <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
              React
            </span>
          </div>

          {/* Project Card 2 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Project Two</h3>
            <p className="text-gray-700 mb-4">
              Short description of the project goes here. What it does and technologies used.
            </p>
            <span className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm">
              JavaScript
            </span>
          </div>

          {/* Project Card 3 */}
          <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">Project Three</h3>
            <p className="text-gray-700 mb-4">
              Short description of the project goes here. What it does and technologies used.
            </p>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-1">
              HTML/CSS
            </span>
            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-1">
              PHP
            </span><span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
              Tailwind
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
