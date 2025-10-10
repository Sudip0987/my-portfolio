import React from "react";
function About(){
    return(
        <section id ="about" className="bg-white py-20">
            <div className ="container mx-auto px-6 text-center">
                <h2 className = "text-4xl font-bold mb-6">About Me</h2>
                <p className="text-lg mb-6">
  I'm Sudip Sharma, a web developer with experience in <strong>Java, JavaScript, HTML, CSS, and PHP</strong>. 
  I have hands-on experience building websites, creating courses/templates in LMS platforms, and working with WordPress. 
  I enjoy building modern, responsive web applications.
</p>
<p className="text-lg mb-6">
  I love learning new technologies, solving problems, and creating projects that demonstrate my skills.
</p>

        {/*skill badges*/}
        <div className="flex justify-center flex-wrap gap-3 mt-6">
        <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">JavaScript (React)</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">HTML/CSS (Tailwind)</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">PHP</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Java</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">Git</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">WordPress</span>
  <span className="bg-blue-100 text-blue-800 px-4 py-2 rounded-full">E-learning Development</span>


        </div>

            </div>
        </section>
    );

}
export default About;