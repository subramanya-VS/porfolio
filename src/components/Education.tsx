import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { GraduationCap } from 'lucide-react';

const education = [
  {
    degree: "Bachelors in information science & engineering",
    institution: "M S Ramaiah university of applied sciences",
    period: "2022 - 2026"
  },
];

export const Education: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        {/* Education Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Education</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            My academic journey in Computer Science
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {education.map((edu, index) => (
            <motion.div
              key={edu.degree}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      x: 0,
                      transition: { delay: index * 0.2 },
                    }
                  : {}
              }
              className="relative pl-8 pb-12 last:pb-0"
            >
              <div className="absolute left-0 top-0 w-px h-full bg-primary/20">
                <motion.div
                  initial={{ height: 0 }}
                  animate={
                    inView
                      ? {
                          height: "100%",
                          transition: { delay: index * 0.2, duration: 0.5 },
                        }
                      : {}
                  }
                  className="w-full bg-primary"
                />
              </div>

              <div className="absolute left-0 top-0 -translate-x-1/2 bg-white dark:bg-gray-900 p-1 rounded-full">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>

              <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg ml-4">
                <h3 className="text-xl font-semibold mb-2">{edu.degree}</h3>
                <p className="text-primary font-medium mb-2">{edu.institution}</p>
                <p className="text-secondary text-sm mb-4">{edu.period}</p>
                <p className="text-gray-600 dark:text-gray-300">{edu.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Download Resume Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold mb-4">View My Resume</h3>
          <p className="text-lg text-secondary mb-6">
            Click the button below to open my resume.
          </p>
          <a
            href="https://1drv.ms/w/c/02371f8816c60400/ETvTcNiddVhDnr5b3axA2iAB87AWbhM2jd8_yflaKclxdg?e=e8H1Fa"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg shadow-lg hover:bg-primary-dark transition duration-300"
          >
            View Resume
          </a>
        </div>
      </div>
    </section>
  );
};
