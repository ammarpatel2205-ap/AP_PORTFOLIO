import React from "react";
import { projectData } from "../assets/asstes";

const Projects = () => {
  return (
    <div id="projects" className="py-20">
      <div className="max-w-7xl mx-auto px-6 py-6">
        <div className="mb-16 text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-700 mb-6">
            My
            <span className="text-teal-600">Projects</span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto">
            Cutting-edge web application built with modern technologies
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {projectData.map((project, index) => (
            <div
              key={index}
              className="group rounded overflow-hidden hover:shadow-lg transition cursor-pointer border border-gray-200 hover:-translate-y-1 duration-300"
            >
              <div className="relative aspect-16/10 overflow-hidden rounded-t-lg bg-gray-100">
                <img src={project.image} alt="" className="w-full h-full" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2">
                  {project.live ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noreferrer"
                      className="hover:text-teal-600"
                    >
                      {project.title}
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p className="text-slate-900 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-6">
                  {project.tech.map((language, index) => (
                    <span
                      key={index}
                      className="px-4 py-1 bg-gray-100 text-xs font-semibold rounded-full"
                    >
                      {language}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
