"use client";
import Reveal from "./Reveal";
import { featuredProjects } from "@/app/data/featuredProjects";
import { FiGithub, FiExternalLink } from "react-icons/fi";
import Image from "next/image";

export default function FeaturedProjects() {
  return (
    <section id="projects" className="max-w-7xl mx-auto px-20 py-40 text-[#ccd6f6]">
      <Reveal>
        <div className="flex items-center gap-4 mb-20">
          <h2 className="font-display text-5xl md:text-6xl font-bold text-[#64ffda]">
            Featured Projects
          </h2>
          <div className="h-px bg-slate-700 flex-1 ml-8"></div>
        </div>
      </Reveal>

      <div className="space-y-32">
        {featuredProjects.map((project, index) => {
          const isEven = index % 2 === 0;

          return (
            <Reveal key={index} delay={index * 0.2}>
              <div className="relative">

                {/* PROJECT IMAGE */}
                <div className={`relative ${isEven ? '' : 'ml-auto'} md:w-[60%]`}>
                  <div className="relative overflow-hidden rounded-lg border border-[#64ffda]/20">
                    <div className="aspect-video relative">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 60vw"
                        priority
                      />
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-[#64ffda]/10 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>

                {/* DETAILS CARD */}
                <div
                  className={`absolute ${isEven ? "right-0" : "left-0"} 
                  top-1/2 -translate-y-1/2 md:w-[50%] z-10`}
                >
                  <div className="space-y-4">

                    {/* TITLE */}
                    <h3
                      className={`text-3xl font-bold text-white hover:text-[#64ffda] transition-colors ${
                        isEven ? "text-right" : "text-left"
                      }`}
                    >
                      {project.title}
                    </h3>

                    {/* DESCRIPTION CARD */}
                    <div className="bg-[#112240] p-6 rounded-lg shadow-2xl border border-slate-800/50">
                      <p className="text-[#8892b0] leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* TECH STACK */}
                    <ul
                      className={`flex flex-wrap gap-3 text-sm font-mono text-[#8892b0] ${
                        isEven ? "justify-end" : "justify-start"
                      }`}
                    >
                      {project.tech.map((tech, i) => (
                        <li key={i}>{tech}</li>
                      ))}
                    </ul>

                    {/* LINKS */}
                    <div
                      className={`flex gap-4 text-[#ccd6f6] ${
                        isEven ? "justify-end" : "justify-start"
                      }`}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#64ffda] transition-colors"
                        >
                          <FiGithub size={22} />
                        </a>
                      )}

                      {project.external && project.external !== "#" && (
                        <a
                          href={project.external}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-[#64ffda] transition-colors"
                        >
                          <FiExternalLink size={22} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          );
        })}
      </div>
    </section>
  );
}


