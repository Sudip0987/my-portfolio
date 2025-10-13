import React from "react";

function Experience() {
    return (
        <section id="experience" className="bg-gray-100 py-24">
            <div className="mx-auto "  >
                <h2 className="text-4xl text-center font-bold mb-6s">Past experience</h2>
                {/*Experience cards*/}

                <div className="my-10 max-w-4xl mx-auto flex flex-col md:flex-row items-stretch p-5 gap-6 rounded-md border border-gray-300/70 shadow-md" >
                    <img className="w-full md:w-2/3 h-80 object-cover rounded-lg" alt="Supported decision-making project"
                        src="/images/screenshots/supporteddecisionmaking.png"></img>
                    <div className="flex flex-col">
                        <h3 className="text-2xl mb-5" > Custom-Built Accessible WordPress Website</h3>
                        <p className="text-gray-700 mb-4">A custom-built WordPress website designed to assist individuals with disabilities in decision-making. Developed mainly using HTML, CSS, and PHP, with features like dark mode, login, and signup. My contributions focused on backend functionality and frontend design to create a responsive, user-friendly experience.</p>
                        <div className="flex flex-wrap">
                            <span className="inline-block bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm mr-1">HTML/CSS</span>

                            <span className="inline-block rounded-full bg-purple-100  text-purple-800 px-3 py-1 text-sm">PHP</span>
                        </div>

                         <a href="https://decidingwithsupport.flinders.edu.au/" target="_blank" rel="noopener noreferrer"className="inline-block  text-center mt-4 bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition">Live demo</a>

                    </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;