import React from "react";
function ProjectCard({title,description,technologies}){
    return(

        
   <div className="bg-white rounded-lg shadow p-6 hover:shadow-lg transition">
            <h3 className="text-2xl font-bold mb-2">{title}</h3>
            <p className="text-gray-700 mb-4">
              {description}
            </p>
           {technologies.map((tech,index)=>(
            <span key="index" className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm mr-1">
              {tech}
            </span>
           ))}
          </div>    );
}
export default ProjectCard;


