import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
  {
    title: "Custom-Built Accessible WordPress Website",
    description:
      "A custom-built WordPress website designed to assist individuals with disabilities in decision-making. Developed mainly using HTML, CSS, and PHP, with features like dark mode, login, and signup. My contributions focused on backend functionality and frontend design to create a responsive, user-friendly experience.",
    image: "/images/screenshots/supporteddecisionmaking.png",
    technologies: ["HTML/CSS", "PHP", "JavaScript", "WordPress"],
    link: "https://decidingwithsupport.flinders.edu.au/",
  },
  {
    title: "Scaffold in CPA Course Construction",
    description:
      "The sidebar menu, known as the 'Scaffold,' serves as a pivotal tool for constructing courses within Canvas. My role primarily focused on the frontend development of this tool, encompassing HTML, CSS, PHP, JavaScript, and React.js.",
    image: "/images/screenshots/scaffoldScreenshot.png",
    technologies: ["HTML/CSS", "PHP", "JavaScript", "React"],
    link: "#",
  },
  {
    title: "Santa Clara University Canvas Course Template",
    description:
      "Custom template developed for Santa Clara University, including dynamic elements like course banners, progress bars, and course trackers, which automatically update based on student progress. JavaScript was utilized for dynamic functionality.",
    image: "/images/screenshots/SCUScreenshot1.png",
    technologies: ["HTML/CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "NESA Canvas Course Template",
    description:
      "Custom template for NESA, showcasing banners and module cards, all made dynamic using JavaScript to improve the learning experience.",
    image: "/images/screenshots/NesaScreenshot.png",
    technologies: ["HTML/CSS", "JavaScript"],
    link: "#",
  },
  {
    title: "DSI Canvas Course Template",
    description:
      "Custom DSI course template created with HTML, CSS, and JavaScript. Includes banners, callout boxes, and videos, all customized to enhance the learning experience.",
    image: "/images/screenshots/DSIScreenshot1.png",
    technologies: ["HTML/CSS", "JavaScript"],
    link: "#",
  },

];


function Experience() {
    return (
        <section id="experience" className="bg-gray-100 py-24">
            <div className="mx-auto "  >
                <h2 className="text-4xl text-center font-bold mb-6s">Past experience</h2>
                {/*Experience cards*/}
              
              {experiences.map((exp,index)=>(
                <ExperienceCard
                key={index}
                title= {exp.title}
                description={exp.description}
                image={exp.image}
                technologies={exp.technologies}
                link={exp.link}
                />
              ))}
              

               
           
                
            </div>
        </section>
    );
}

export default Experience;