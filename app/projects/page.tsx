"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionHeading from "@/components/section-heading";
import ProjectCard from "@/components/project-card";

const projects = [

    {
      id: 1,
      title: "Healthcare Management System",
      description: "A full-stack healthcare management system with patient records, appointment scheduling.",
      image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Node.js", "Express", "Sequelize"],
      category: "fullstack",
      githubUrl: "https://github.com/Rp3152/Healthcare-Management-System.git",
    },

  
    {
      id: 2,
      title: "Personal Portfolio",
      description: "A modern portfolio website showcasing projects, skills, and experience, built using React and Next.js.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2070&auto=format&fit=crop",
      tags: ["React", "Next.js", "Tailwind CSS"],
      category: "frontend",
      liveUrl: "https://portfolio-website-mu-sage.vercel.app/",
      githubUrl: "https://github.com/Rp3152/Portfolio-Website.git",
    },
    
    {
      id: 3,
      title: "Padel Court Management System (Company Project)",
      description: "Developed the admin and court owner panel for a padel court management system, focusing on frontend development within the company.",
      image: "./paddle-court.webp",

      tags: ["React", "Node.js", "MongoDB", "Express"],
      category: "fullstack",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
    
    {
      id: 4,
      title: "ProMenteProSup (Company Project)",
      description: "Worked on the admin panel using Node.js and performed manual testing to ensure system reliability and performance.",
      image:"./cleaning.jpg",
      tags: ["Node.js", "Express", "Manual Testing", "MongoDB"],
      category: "backend",
      // liveUrl: "https://example.com",
      // githubUrl: "https://github.com",
    },
];

export default function ProjectsPage() {
  const [filter, setFilter] = useState("all");
  
  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="My Projects"
          subtitle="A showcase of my recent work and personal projects"
        />

        <div className="flex justify-center mb-12">
          <div className="flex flex-wrap gap-2">
            {["all", "frontend", "backend", "fullstack"].map((category) => (
              <Button
                key={category}
                variant={filter === category ? "default" : "outline"}
                onClick={() => setFilter(category)}
                className="capitalize"
              >
                {category === "all" ? "All Projects" : category}
              </Button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={filter}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                title={project.title}
                description={project.description}
                image={project.image}
                tags={project.tags}
                liveUrl={project.liveUrl}
                githubUrl={project.githubUrl}
              />
            ))}
          </motion.div>
        </AnimatePresence>

        {filteredProjects.length === 0 && (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium mb-2">No projects found</h3>
            <p className="text-muted-foreground">
              No projects match the selected filter. Try selecting a different category.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}