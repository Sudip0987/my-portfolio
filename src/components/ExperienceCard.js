import React from "react";

function ExperienceCard({title, description, image, technologies, link}){

    return(
  <div className="my-10 max-w-4xl mx-auto flex flex-col md:flex-row items-stretch p-5 gap-6 rounded-md border border-gray-300/70 shadow-md" >
                    <img className="w-full md:w-2/3 h-80 object-cover rounded-lg" alt="Supported decision-making project"
                        src={image}></img>
                    <div className="flex flex-col">
                        <h3 className="text-2xl mb-5" > {title}</h3>
<                       p className="text-gray-700 mb-4">{description}</p>
                        <div className="flex flex-wrap">
                            {technologies.map((tech, index)=>(
                            <span key={index}
                            className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-1">
                                {tech}
                                </span>

                            ))}

                        </div>

                         <a href={link} target="_blank" rel="noopener noreferrer"className="inline-block  text-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Live demo</a>

                    </div>

                </div>

                   );
}
export default ExperienceCard;