import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import GradientText from '../styles/GradientText';

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Python", level: 85 },
      { name: "Java", level: 75 }, 
      { name: "JavaScript", level: 69 },
      { name: "C", level: 70 },
      { name: "C++", level: 70 },
    ],
  },
  {
    category: "AI-Tools",
    items: [
      { name: "TensorFlow", level: 95 },
      { name: "PyTorch", level: 85 },
      { name: "LangChain", level: 85 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "Spring-Boot", level: 75 },
      { name: "MySQL", level: 80 },
      { name: "Node.js", level: 90 },
      { name: "Next.js", level: 50 },
      { name: "Tailwind CSS", level: 69 },
    ],
  },
];

const softSkills = [
  "Problem Solving",
  "Team Collaboration",
  "Adaptability",
  "Communication",
  "Critical Thinking",
  "Leadership",
];

export const Skills: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section id="skills" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        {/* Technical Skills Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <GradientText className="text-xl text-secondary mb-10" colors={["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"]} animationSpeed={7} showBorder={true}>
          A comprehensive overview of my technical expertise and proficiency levels
          </GradientText>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto mb-16">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={
                inView
                  ? {
                      opacity: 1,
                      y: 0,
                      transition: { delay: groupIndex * 0.2 },
                    }
                  : {}
              }
              className="space-y-6"
            >
              <h3 className="text-2xl font-semibold mb-6 text-center">
                {skillGroup.category}
              </h3>
              {skillGroup.items.map((skill, index) => (
                <div key={skill.name} className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      animate={
                        inView
                          ? {
                              width: `${skill.level}%`,
                              transition: {
                                delay: groupIndex * 0.2 + index * 0.1,
                                duration: 1,
                                ease: "easeOut",
                              },
                            }
                          : {}
                      }
                      className="h-full bg-primary rounded-full"
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          ))}
        </div>

        {/* Soft Skills Section */}
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold mb-4">Soft Skills</h2>
            <GradientText className="text-xl text-secondary mb-10" colors={["#40ffaa, #4079ff, #40ffaa, #4079ff, #40ffaa"]} animationSpeed={7} showBorder={true}>
            My personal attributes that complement my technical abilities.
          </GradientText>

          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  inView
                    ? {
                        opacity: 1,
                        scale: 1,
                        transition: { delay: index * 0.1, duration: 0.5 },
                      }
                    : {}
                }
                className="bg-primary text-white px-6 py-3 rounded-lg shadow-lg text-lg font-medium"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
