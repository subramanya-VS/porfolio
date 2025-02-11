import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Terminal, Coffee, Brain } from "lucide-react";
import BlurText from "../styles/BlurText";
import DecryptedText from "../styles/DecryptedText";
import { SkillCard } from "../styles/SkillCard"; 

export const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.6,
        duration: 0.5,
      },
    }),
  };

  const cards = [
    {
      Icon: Terminal,
      title: "Software Development",
      description:
        "Passionate about creating efficient, scalable, and maintainable code. Experienced in full-stack development with modern technologies.",
    },
    {
      Icon: Brain,
      title: "AI & Machine Learning",
      description:
        "Building intelligent systems that learn, adapt, and solve real-world challenges.",
    },
    {
      Icon: Coffee,
      title: "Continuous Learning",
      description:
        "Always staying up-to-date with the latest technologies and best practices in software development.",
    },
  ];

  return (
    <section className="py-12">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-8"
      >
        <BlurText
          text="About Me"
          delay={50}
          className="text-4xl font-bold mb-4"
          animateBy="letters"
          direction="top"
        />
        <DecryptedText
          text="A passionate Computer Science professional dedicated to crafting elegant solutions to complex problems."
          speed={15}
          maxIterations={10}
          characters="ABCD1234!@#$%^"
          sequential={true}
          animateOn="view"
          revealDirection="start"
          parentClassName="all-letters"
          encryptedClassName="encrypted"
          className="text-xl text-secondary max-w-2xl mx-auto"
        />
      </motion.div>

      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto px-4"
        ref={ref}
      >
        {cards.map(({ Icon, title, description }, i) => (
          <motion.div
            key={title}
            custom={i}
            variants={cardVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="h-[300px]" // Match the card height
          >
            <SkillCard Icon={Icon} title={title} description={description} />
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default About;