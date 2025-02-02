import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Github, ExternalLink, PlayCircle } from 'lucide-react';
import { projects } from '../data/projects';

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export function ProjectDetail() {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  const project = projects.find(p => p.slug === slug);
  const currentIndex = projects.findIndex(p => p.slug === slug);
  const prevProject = currentIndex > 0 ? projects[currentIndex - 1] : null;
  const nextProject = currentIndex < projects.length - 1 ? projects[currentIndex + 1] : null;

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project not found</h1>
          <Link to="/projects" className="text-primary hover:text-primary-dark">
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="flex items-center gap-2 mb-8 text-sm"
        >
          <Link to="/" className="text-gray-600 hover:text-primary">Home</Link>
          <span className="text-gray-400">/</span>
          <Link to="/projects" className="text-gray-600 hover:text-primary">Projects</Link>
          <span className="text-gray-400">/</span>
          <span className="text-primary">{project.title}</span>
        </motion.div>

        {/* Project Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={staggerContainer}
          className="mb-12"
        >
          <motion.h1 variants={fadeIn} className="text-4xl md:text-5xl font-bold mb-6">
            {project.title}
          </motion.h1>
          <motion.p variants={fadeIn} className="text-xl text-gray-600 dark:text-gray-300">
            {project.description}
          </motion.p>
        </motion.div>

        {/* Main Image */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <img
            src={project.images.main}
            alt={project.title}
            className="w-full h-[400px] object-cover rounded-lg shadow-lg"
          />
        </motion.div>

        {/* Project Info */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold">Timeline</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.timeline}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold">Technologies</h2>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="space-y-4"
          >
            <h2 className="text-xl font-bold">Links</h2>
            <div className="flex gap-4">
              {/* {project.links.github && (
                <a
                  href={project.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <Github size={20} />
                  <span>Source Code</span>
                </a>
              )} */}
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <ExternalLink size={20} />
                  <span>Visit Website</span>
                </a>
              )}
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-gray-600 hover:text-primary"
                >
                  <PlayCircle size={20} />
                  <span>Play Store</span>
                </a>
              )}
            </div>
          </motion.div>
        </div>

        {/* Challenge & Solution */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">The Challenge</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.challenge}</p>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">The Solution</h2>
            <p className="text-gray-600 dark:text-gray-300">{project.solution}</p>
          </motion.div>
        </div>

        {/* Technical Implementation */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Technical Implementation</h2>
          <p className="text-gray-600 dark:text-gray-300">{project.implementation}</p>
        </motion.div>

        {/* Features & Achievements */}
        <div className="grid md:grid-cols-2 gap-12 mb-12">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">Key Features</h2>
            <ul className="space-y-3">
              {project.features.map((feature, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <h2 className="text-2xl font-bold mb-6">Achievements</h2>
            <ul className="space-y-3">
              {project.achievements.map((achievement, index) => (
                <li key={index} className="flex items-center gap-2">
                  <span className="w-2 h-2 bg-primary rounded-full" />
                  <span>{achievement}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Gallery */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="mb-12"
        >
          <h2 className="text-2xl font-bold mb-6">Gallery</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {project.images.gallery.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`${project.title} gallery image ${index + 1}`}
                className="w-full h-48 object-cover rounded-lg hover:opacity-90 transition-opacity cursor-pointer"
              />
            ))}
          </div>
        </motion.div>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-8 border-t">
          {prevProject ? (
            <button
              onClick={() => navigate(`/projects/${prevProject.slug}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <ChevronLeft size={20} />
              <span>{prevProject.title}</span>
            </button>
          ) : (
            <div />
          )}
          {nextProject && (
            <button
              onClick={() => navigate(`/projects/${nextProject.slug}`)}
              className="flex items-center gap-2 text-gray-600 hover:text-primary"
            >
              <span>{nextProject.title}</span>
              <ChevronRight size={20} />
            </button>
          )}
        </div>
      </div>
    </div>
  );
}