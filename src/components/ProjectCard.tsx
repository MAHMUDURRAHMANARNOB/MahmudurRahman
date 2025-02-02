import React from 'react';
import { motion } from 'framer-motion';
import { Tilt } from 'react-tilt';
import { ExternalLink, PlayCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Project } from '../types/project';

const defaultTiltOptions = {
  reverse: false,
  max: 15,
  perspective: 1000,
  scale: 1.05,
  speed: 1000,
  transition: true,
  axis: null,
  reset: true,
  easing: "cubic-bezier(.03,.98,.52,.99)",
};

interface ProjectCardProps {
  project: Project;
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link to={`/projects/${project.slug}`}>
      <Tilt options={defaultTiltOptions}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="group relative bg-white  rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow"
        >
          {/* Image with Overlay */}
          <div className="relative h-48 overflow-hidden">
            <img
              src={project.images.main}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-primary/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <span className="text-white text-lg font-medium">View Details</span>
            </div>
          </div>

          {/* Content */}
          <div className="p-6">
            <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {project.shortDescription}
            </p>

            {/* Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="px-2 py-1 bg-primary/10 text-primary text-sm rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex gap-4 mt-auto">
              {project.links.demo && (
                <a
                  href={project.links.demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <ExternalLink size={20} />
                  <span>View Website</span>
                </a>
              )}
              {project.links.playStore && (
                <a
                  href={project.links.playStore}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="flex items-center gap-2 text-gray-600 hover:text-primary transition-colors"
                >
                  <PlayCircle size={20} />
                  <span>Play Store</span>
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </Tilt>
    </Link>
  );
}