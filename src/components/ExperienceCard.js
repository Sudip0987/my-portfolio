import React from "react";

function ExperienceCard({title, description, image, technologies, link,demo}){

    return(
  <div className="my-10 max-w-4xl mx-auto flex flex-col items-stretch p-5 gap-2 rounded-md border border-gray-300/70 shadow-md" >

                                                <h3 className="text-2xl mb-2" > {title}</h3>

                        
<                       p className="text-gray-700 mb-2">{description}</p>

                        <div className="flex flex-wrap gap-2">
                            {technologies.map((tech, index)=>(
                                
                            <span key={index}
                            className="inline-block bg-blue-100 w-50 text-blue-800 px-3 py-1 rounded-full text-sm">
                                {tech}

                                </span>

                            ))}

                        </div>
                        <img className="w-full md:w-2/3 h-80 object-cover rounded-lg mt-2" alt="Supported decision-making project"
                        src={image}></img>
                                {demo &&(
                         <a href={link} target="_blank" rel="noopener noreferrer"className="inline-block w-32  text-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Live demo</a>

                                )}


                </div>

                   );
}
export default ExperienceCard;