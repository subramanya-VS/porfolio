import React from 'react';
import { motion } from 'framer-motion';
import { Code, Github, Linkedin, Mail, MailPlus } from 'lucide-react';
import RotatingText from '../styles/RotatingText';

export const Hero: React.FC = () => {
  const letterAnimation = {
    hidden: { y: 100, opacity: 0 },
    visible: (i: number) => ({
      y: 0,
      opacity: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.8,
        type: "spring",
        damping: 10,
        stiffness: 100
      }
    })
  };

  const title = "Hi, I'm Subramanya".split("");

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-radial from-primary/20 via-transparent to-transparent animate-pulse" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(68,68,68,.2)_50%,transparent_75%,transparent_100%)] bg-[length:20px_20px] animate-[grain_0.8s_steps(1,end)_infinite]" />
      </div>

      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="text-center relative"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              damping: 10,
              stiffness: 100,
            }}
            className="mb-8 relative"
          >
            <Code className="w-20 h-20 mx-auto text-primary animate-float" />
            <motion.div
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
              className="absolute inset-0 bg-primary/20 rounded-full blur-xl"
            />
          </motion.div>
          
          <div className="mb-6 overflow-hidden">
            <div className="flex justify-center">
              {title.map((char, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={letterAnimation}
                  initial="hidden"
                  animate="visible"
                  className={`text-5xl md:text-7xl font-bold ${
                    char === " " ? "mr-4" : ""
                  } ${
                    char === "J" ? "text-primary" : ""
                  }`}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </div>
          
            <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="text-xl md:text-2xl text-secondary relative py-4"
          >
            <div className="flex justify-center items-center text-white text-4xl font-bold space-x-2">
              <span className="text-gray-200">Aspiring</span>
              <div className="inline-flex items-center px-3 py-1 bg-cyan-300 text-black rounded-md">
                <RotatingText
                  texts={['AI engineer', 'Full-stack developer','Data Scientist']}
                  mainClassName="overflow-hidden"
                  staggerFrom={"last"}
                  initial={{ y: "100%" }}
                  animate={{ y: 0 }}
                  exit={{ y: "-120%" }}
                  staggerDuration={0.025}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={2000}
                />
              </div>
            </div>
          </motion.p>

          
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.2 }}
            className="flex justify-center space-x-6"
          >
            {[
              { Icon: Linkedin, href: "https://www.linkedin.com/in/vss04/" },
              { Icon: Github, href: "https://github.com/subramanya-VS" },
              { Icon: Mail, href: "mailto:vssubramanya04@gmail.com" },
              { Icon: MailPlus, href: "mailto:vssubramanya@outlook.com" }
            ].map(({ Icon, href }, index) => (
              <motion.a
                key={index}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.2,
                  rotate: [0, -10, 10, -10, 0],
                  transition: { duration: 0.4 }
                }}
                whileTap={{ scale: 0.9 }}
                className="p-2 rounded-full hover:bg-primary/10 relative group"
              >
                <Icon className="w-6 h-6 relative z-10" />
                <motion.div
                  className="absolute inset-0 bg-primary/20 rounded-full blur-md -z-10"
                  initial={{ scale: 0 }}
                  whileHover={{ scale: 1.5 }}
                />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        animate={{
          y: [-20, 20, -20],
          opacity: [0.3, 0.6, 0.3]
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-primary/50"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="w-6 h-10 border-2 border-current rounded-full relative"
        >
          <div className="absolute top-2 left-1/2 w-1 h-1 bg-current rounded-full -translate-x-1/2" />
        </motion.div>
      </motion.div>
    </section>
  );
};