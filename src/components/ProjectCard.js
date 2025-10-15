import React from "react";
function ProjectCard({title,description,technologies,projLink,demoLink}){

    return(
        
   <div className="flex flex-col bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">
              {description}
            </p>
            <div className="flex flex-wrap mb-4 gap-2">
           {technologies.map((tech,index)=>(
            <span key={index} className=" bg-blue-100 w-50 text-blue-800 px-3 py-1 rounded-full text-sm">
              {tech}
            </span>
           ))}
           </div>
           
        <div className="flex flex-row gap-2 mt-auto">
             <a href={projLink} className=" inline-block w-40 bg-blue-600 text-white px-3 py-2 text-center rounded-full hover:bg-blue-700 transition"   rel="noopener noreferrer"
 target="_blank">View Github</a>
  <a href={demoLink} className=" inline-block w-40 bg-blue-600 text-white px-3 py-2 text-center rounded-full hover:bg-blue-700 transition"   rel="noopener noreferrer"
 target="_blank">View Demo</a>
        </div>
           
          </div>    );
}
export default ProjectCard;


