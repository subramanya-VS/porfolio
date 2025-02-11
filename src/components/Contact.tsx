import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Send, Mail, MailPlus } from 'lucide-react';

export const Contact: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formState);
  };

  const contactInfo = [
    {
      Icon: Mail,
      title: "Email",
      content: "vssubramanya04@gmail.com",
      href: "mailto:vssubramanya04@gmail.com"
    },
    {
      Icon: MailPlus,
      title: "Mail",
      content: "vssubramanya@outlook.com",
      href: "mailto:vssubramanya@outlook.com"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-b from-transparent to-primary/5">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
          <p className="text-xl text-secondary max-w-2xl mx-auto">
            Let's discuss how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
          <div className="lg:col-span-2">
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formState.name}
                    onChange={(e) => setFormState(s => ({ ...s, name: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formState.email}
                    onChange={(e) => setFormState(s => ({ ...s, email: e.target.value }))}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                    required
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  value={formState.message}
                  onChange={(e) => setFormState(s => ({ ...s, message: e.target.value }))}
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 focus:ring-2 focus:ring-primary focus:border-transparent"
                  required
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="w-full py-3 px-6 bg-primary text-white rounded-lg font-medium flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-4 h-4" />
              </motion.button>
            </motion.form>
          </div>

          <div className="space-y-8">
            {contactInfo.map(({ Icon, title, content, href }, index) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? {
                  opacity: 1,
                  x: 0,
                  transition: { delay: index * 0.2 }
                } : {}}
                className="flex items-start gap-4"
              >
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-medium mb-1">{title}</h3>
                  {href ? (
                    <a
                      href={href}
                      className="text-secondary hover:text-primary transition-colors"
                    >
                      {content}
                    </a>
                  ) : (
                    <p className="text-secondary">{content}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};