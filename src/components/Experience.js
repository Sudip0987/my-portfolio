import React from "react";

function Experience() {
    return (
        <section id = "experience" className="bg-gray-100 py-24">
            <div className="mx-auto"  >
                <h2 className="text-4xl text-center">Past experience</h2>
                    {/*Experience cards*/}

                <div className="bg-blue-200 my-10 max-w-2xl mx-auto flex flex-row md:flex-row items-stretch p-5 border border-gray-400 gap-6" >
                        <img className="w-full md:w-1/3 object-cover rounder-lg" src = "/images/screenshots/supporteddecisionmaking.png"></img>
                        <div className="">
                        <h3 className="text-2xl" > Title</h3>
                        <p>Description</p>
                        <span>tech skill Badges</span>
                        <p>Live demo</p>
                        </div>

                </div>
            </div>
        </section>
    );
}

export default Experience;