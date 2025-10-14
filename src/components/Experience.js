import React from "react";
import ExperienceCard from "./ExperienceCard";

const experiences = [
    {
    title:"test",
    description:"desc",
    image:"/images/screenshots/supporteddecisionmaking.png",
    technologies:["HTML/CSS", "PHP"],
    link:"s"
    }

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