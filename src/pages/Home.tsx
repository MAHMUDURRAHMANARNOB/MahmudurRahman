import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Github,
  Linkedin, 
  Mail, 
  Moon,
  Sun,
  Phone,
  Download,
  ChevronDown
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectCard } from '../components/ProjectCard';
import { projects } from '../data/projects';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

function Section({ children, className = '', id }: { children: React.ReactNode, className?: string, id?: string }) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <motion.section
      id={id}
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={fadeIn}
      className={className}
    >
      {children}
    </motion.section>
  );
}

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className={`min-h-screen transition-colors duration-300 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <header className="min-h-screen flex flex-col items-center justify-center relative px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Mahmudur Rahman
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8">
            Software Engineer | Mobile Application Developer
          </p>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 mb-12">
            Creating intuitive digital experiences with Flutter & Android
          </p>
          <div className="flex gap-6 justify-center mb-12">
            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download size={20} />
              Download Resume
            </motion.a>
            <motion.button
              onClick={() => {
                document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
              }}
              className="flex items-center gap-2 px-6 py-3 border-2 border-primary text-primary rounded-lg hover:bg-primary hover:text-white transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
            </motion.button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <motion.a
              href="https://github.com/MAHMUDURRAHMANARNOB"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/mahmudur-rahman0920"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="mailto:mahmudur.rahman2023@gmail.com"
              className="p-2 hover:text-primary transition-colors"
              whileHover={{ scale: 1.2 }}
            >
              <Mail size={24} />
            </motion.a>
          </div>
          <motion.button
            onClick={() => {
              document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="absolute bottom-8 animate-bounce"
            whileHover={{ scale: 1.2 }}
          >
            <ChevronDown size={32} />
          </motion.button>
        </motion.div>
      </header>

      {/* About Section */}
      <Section id="about" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-primary"
            variants={fadeIn}
          >
            About Me
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.img
              variants={fadeIn}
              src="https://media.licdn.com/dms/image/v2/D5603AQH4Jfw5AKfkbg/profile-displayphoto-shrink_800_800/profile-displayphoto-shrink_800_800/0/1693374909597?e=1753315200&v=beta&t=_-zsYqrgjwRssuvj_F_erlcO20kYKYKeDcW70NQMhCo"
              alt="Professional headshot"
              className="rounded-lg shadow-xl"
            />
            <motion.div variants={staggerContainer}>
              <motion.p variants={fadeIn} className="text-lg mb-6">
                I'm a passionate Software Engineer with expertise in mobile application development.
                My journey in tech has been driven by a desire to create impactful solutions
                that enhance user experiences across platforms.
              </motion.p>
              <motion.p variants={fadeIn} className="text-lg">
                With a strong foundation in both Flutter and Android development,
                I specialize in creating robust, scalable applications that solve real-world problems.
                My work at Shonod has allowed me to contribute to innovative EdTech solutions
                and improve user engagement across multiple platforms.
              </motion.p>
            </motion.div>
          </div>
        </div>
      </Section>

      {/* Experience Section */}
      <Section id="experience" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-primary"
            variants={fadeIn}
          >
            Work Experience
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="space-y-12"
          >
            <motion.div 
              variants={fadeIn}
              className="border-l-4 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">Software Engineer (Mobile Application)</h3>
              <p className="text-gray-600 dark:text-cyan-800 mb-4">Shonod • May 01, 2022 - Present</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Led the development of "Digital Study Room" an AI-based mobile application for Bangla medium students.</li>
                <li>Spearheaded the development of Risho-Speech and Risho-Guru, achieving a 30% increase in student engagement based on
                user feedback</li>
                <li>Designed and implemented the app using Flutter, RestApi, Provider (State management), and Firebase, ensuring a smooth
                and responsive user experience.</li>
                <li>Created the user interface for the TalentLensHub and Risho Guru web application.</li>
                <li>Mentored junior developers and established best practices</li>
              </ul>
            </motion.div>
            <motion.div 
              variants={fadeIn}
              className="border-l-4 border-primary pl-6"
            >
              <h3 className="text-2xl font-bold mb-2">Software Developer Intern</h3>
              <p className="text-gray-800 dark:text-cyan-800 mb-4">Shonod • October 01, 2021 - April 30, 2022</p>
              <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300">
                <li>Adapted and refined the user interface based on client specifications, utilizing raw CSS and JavaScript to meet and
                exceed client expectations.</li>
                <li>Acquired proficiency in updating and maintaining projects on live servers, ensuring seamless project functionality
                and adherence to industry best practices.</li>
                <li>Recommended improved UI designs, contributing valuable insights to enhance visual aesthetics and user
                experience in alignment with industry standards.</li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </Section>

      {/* Projects Section */}
      <Section id="projects" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div 
            variants={staggerContainer}
            className="mb-12"
          >
            <motion.h2 
              variants={fadeIn}
              className="text-3xl md:text-4xl font-bold mb-6 text-primary"
            >
              Featured Projects
            </motion.h2>
            <motion.p
              variants={fadeIn}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8"
            >
              Here are some of the projects I've worked on. Each project represents a unique challenge and solution in mobile application developmemnt and UI/UX.
            </motion.p>
          </motion.div>

          <motion.div
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-8 mb-12"
          >
            {projects.map((project) => (
              <motion.div key={project.id} variants={fadeIn}>
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeIn} className="text-center">
            <Link 
              to="/projects"
              className="inline-block px-6 py-3 bg-primary text-white rounded-lg hover:bg-primary-dark transition-colors"
            >
              View All Projects
            </Link>
          </motion.div>
        </div>
      </Section>

      {/* Skills Section */}
      <Section id="skills" className={`py-20 px-4 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-primary"
            variants={fadeIn}
          >
            Skills
          </motion.h2>
          <motion.div 
            variants={staggerContainer}
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
          >
            {[
              'Flutter', 'Provider', 'Riverpod', 'BLoC','REST APIs', "Clean Architecture",
              'Git', 'CI/CD', "Java", "Kotlin", "Google Maps API",
              'MongoDB',"SQLite", "Room Library", 'Firebase', 'Supabase',
              'React.js', "Node.js", 
              "Figma",
            ].map((skill) => (
              <motion.div
                key={skill}
                variants={fadeIn}
                whileHover={{ scale: 1.05 }}
                className={`rounded-lg p-6 ${darkMode ? 'bg-gray-900' : 'bg-white'} shadow-sm hover:shadow-md transition-all`}
              >
                <p className="font-medium text-center">{skill}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </Section>

      {/* Contact Section */}
      <Section id="contact" className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-12 text-primary"
            variants={fadeIn}
          >
            Get in Touch
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div variants={fadeIn}>
              <p className="text-lg mb-6">
                I'm always interested in hearing about new projects and opportunities.
                Feel free to reach out through any of the following channels:
              </p>
              <div className="space-y-4">
                <a
                  href="mailto:mahmudur.rahman2023@gmail.com"
                  className="flex items-center gap-2 text-gray-700 dark:text-cyan-800 hover:text-primary transition-colors"
                >
                  <Mail size={20} />
                  <span>mahmudur.rahman2023@gmail.com</span>
                </a>
                <a
                  href="tel:+1234567890"
                  className="flex items-center gap-2 text-gray-700 dark:text-cyan-800 hover:text-primary transition-colors"
                >
                  <Phone size={20} />
                  <span>+8801758387250</span>
                </a>
              </div>
            </motion.div>
            <motion.form 
              variants={staggerContainer}
              className="space-y-4"
            >
              <motion.div variants={fadeIn}>
                <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  id="name"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-primary' 
                      : 'border-gray-300 focus:border-primary'
                  } focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  id="email"
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-primary' 
                      : 'border-gray-300 focus:border-primary'
                  } focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
                />
              </motion.div>
              <motion.div variants={fadeIn}>
                <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    darkMode 
                      ? 'bg-gray-800 border-gray-700 focus:border-primary' 
                      : 'border-gray-300 focus:border-primary'
                  } focus:ring-2 focus:ring-primary focus:ring-opacity-50`}
                ></textarea>
              </motion.div>
              <motion.button
                variants={fadeIn}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full bg-primary text-white py-2 px-4 rounded-lg hover:bg-primary-dark transition-colors"
              >
                Send Message
              </motion.button>
            </motion.form>
          </div>
        </div>
      </Section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${darkMode ? 'border-gray-800' : 'border-gray-200'} border-t`}>
        <div className="max-w-4xl mx-auto text-center text-gray-600 dark:text-gray-400">
          <p>© {new Date().getFullYear()} Mahmudur Rahman. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}