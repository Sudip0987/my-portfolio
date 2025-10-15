import React from "react";
import ProjectCard from "./ProjectCard";

const projects= [
 {
  title: "Portfolio Website",
  description: "A modern, responsive personal portfolio website designed to showcase my projects, skills, and experience in web development. Built with React and styled using Tailwind CSS, it includes interactive sections such as About, Projects, and Contact. Fully deployed on GitHub Pages, demonstrating best practices in front-end development, responsive design, and clean code structure.",
  technologies: ["React", "Tailwind CSS", "JavaScript", "Git", "GitHub Pages"],
  projLink: "https://github.com/Sudip0987/my-portfolio",
  demoLink:"#"
},
{
  title: "HelpMeFilm",
  description: "HelpMeFilm is a web application that allows users to discover movies and TV shows based on genres, ratings, and personal preferences. Users can search, filter, and explore content seamlessly. The project demonstrates full-stack development using PHP, MySQL, and JavaScript, with responsive HTML/CSS design.",
  technologies: ["HTML", "CSS", "PHP", "MySQL", "JavaScript"],
  projLink: "https://github.com/Sudip0987/helpmefilm",
    demoLink:"https://www.youtube.com/watch?v=S2df-ZEThAg"

},
{
  title: "ClickShop",
  description: "An e-commerce web application allowing users to browse and purchase products online. Features product listing, cart management, and checkout functionality. Built with core web technologies and PHP backend.",
  technologies: ["HTML", "CSS", "JavaScript", "PHP", "MySQL"],
  projLink: "https://github.com/Sudip0987/clickshop",
    demoLink:"#"

},


     {title:"Project 4",
    description:"Short description of the project goes here. What it does and technologies used.",
    technologies:["HTML/CSS (TailWind)", "PHP","React"],
        projLink:"#",
          demoLink:"#"


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
          projLink={proj.projLink}
          demoLink={proj.demoLink}
            />
        ))}
          </div>
      </div>
    </section>
  );
}

export default Projects;
