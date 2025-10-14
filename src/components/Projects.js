import React from "react";
import ProjectCard from "./ProjectCard";

const projects= [
  {title:"Project 1",
    description:"Short description of the project goes here. What it does and technologies used.",
    technologies:["HTML/CSS (TailWind)", "PHP","React"]
  },
  {title:"Project 2",
    description:"Short description of the project goes here. What it does and technologies used.",
    technologies:["HTML/CSS (TailWind)", "PHP","React"]
  },
    {title:"Project 3",
    description:"Short description of the project goes here. What it does and technologies used.",
    technologies:["HTML/CSS (TailWind)", "PHP","React"]
  },
     {title:"Project 4",
    description:"Short description of the project goes here. What it does and technologies used.",
    technologies:["HTML/CSS (TailWind)", "PHP","React"]
  }
]; 
function Projects() {
  return (
    <section id="projects" className="bg-gray-200 py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-4xl font-bold text-center mb-12">Projects</h2>

        {/* Grid of projects */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((proj,index)=>(
          <ProjectCard
          key={index}
          title={proj.title}
          description={proj.description}
          technologies={proj.technologies}
            />
        ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;
