import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import GlowCard from '../styles/GlowCard';
import AnimatedContent from '../styles/AnimatedContent'; // Adjust path if needed
import GradientText from '../styles/GradientText';
import BlurText from '../styles/BlurText';

const projects = [
  {
    id: 1,
    title: "Email Spam Detection System",
    description: "A comprehensive spam detection system utilizing machine learning with Logistic Regression and cross-validation for robust performance.",
    category: "Machine Learning",
    image: "https://media.kasperskycontenthub.com/wp-content/uploads/sites/43/2019/08/27120406/abstract-spam_SL_pic-800x450.jpg",
    technologies: ["Python", "Scikit-learn", "NumPy"],
    link: "https://github.com/subramanya-VS/spam_detection",
    // no demo for this one
  },
  {
    id: 2,
    title: "weather dashboard app",
    description: "Displays real-time weather information for a given city or the user's current location using the OpenWeatherMap API. Shows Temperature, Feels-like, Conditions, Humidity, Wind speed, Rain volume.",
    category: "Frontend",
    image: "https://s3-alpha.figma.com/hub/file/6422877612/800966cc-495a-4d7f-8afe-e5f2a3e89456-cover.png",
    technologies: ["JavaScript", "HTML", "CSS", "React"],
    link: "https://github.com/subramanya-VS/weatherDashboardApp",
    demo: "https://weatherdashboard-subramanya.vercel.app/"
  },
  {
    id: 3,
    title: "Satellite Image Classification",
    description: "Built a TensorFlow transfer-learning pipeline using a frozen VGG16 base and custom dense head with Keras ImageDataGenerator for augmentation, achieving 95.82% test accuracy and 0.95 F1-score.",
    category: "Deep learning",
    image: "https://storage.googleapis.com/kaggle-datasets-images/1544742/2546969/587dbc48162374bca68d9f8c10299a90/dataset-cover.jpg?t=2021-08-21-19-05-27",
    technologies: ["Python", "Tensorflow", "Keras", "Scikit-learn"],
    link: "https://github.com/subramanya-VS/CNN/"
    // demo could be added when available
  },
];

const categories = ["All", ...Array.from(new Set(projects.map(p => p.category)))];

export const Projects: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredProjects = selectedCategory === "All"
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  const cardVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="projects" className="py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-12"
        >
          <BlurText
            text="Projects"
            delay={50}
            className="text-4xl font-bold mb-4"
            animateBy="letters"
            direction="top"
          />
          <GradientText className="text-xl text-secondary mb-10" colors={["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"]} animationSpeed={7} showBorder={true}>
            Showcasing my technical expertise through real-world applications
          </GradientText>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(category => (
              <motion.button
                key={category}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-100 dark:bg-gray-800'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={cardVariants}
              >
                <AnimatedContent distance={100} direction="vertical" delay={100 * i}>
                  <GlowCard>
                    <div className="relative aspect-video overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="object-cover w-full h-full transform hover:scale-110 transition-transform duration-500"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                      <p className="text-secondary mb-4">{project.description}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 bg-primary/10 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <div className="flex justify-end gap-4">
                        <motion.a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-primary/10"
                          aria-label={`${project.title} GitHub`}
                        >
                          <Github className="w-5 h-5" />
                        </motion.a>

                        <motion.a
                          href={project.demo ?? project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          className="p-2 rounded-full hover:bg-primary/10"
                          aria-label={`${project.title} Live Demo`}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </motion.a>
                      </div>
                    </div>
                  </GlowCard>
                </AnimatedContent>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
