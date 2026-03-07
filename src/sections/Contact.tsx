import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, FileText } from 'lucide-react';

const Contact: React.FC = () => {
  const contacts = [
    {
      label: 'Email',
      value: 'swasthik.acharya321@gmail.com',
      icon: Mail,
      link: 'mailto:swasthik.acharya321@gmail.com',
    },
    {
      label: 'Phone',
      value: '+91 8970647487',
      icon: FileText,
      link: 'tel:+918970647487',
    },
    {
      label: 'LinkedIn',
      value: 'linkedin.com/in/swasthik-acharya',
      icon: Linkedin,
      link: 'https://linkedin.com/in/swasthik-acharya-027751249',
    },
    {
      label: 'GitHub',
      value: 'github.com/swasthik2306',
      icon: Github,
      link: 'https://github.com/swasthik2306',
    },
  ];

  return (
    <motion.section
      id="contact"
      className="min-h-screen flex flex-col items-center justify-center py-20 px-4"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-3xl w-full text-center">
        <motion.h2 className="section-title mb-4">Get in Touch</motion.h2>
        <p className="section-subtitle mb-12">Let's Connect & Collaborate</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {contacts.map((contact, idx) => {
            const Icon = contact.icon;
            return (
              <motion.a
                key={idx}
                href={contact.link}
                target={contact.link.startsWith('http') ? '_blank' : undefined}
                rel={contact.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="card card-hover group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center gap-3 mb-2">
                  <Icon className="text-blue-400 group-hover:text-blue-300" size={24} />
                  <h3 className="text-lg font-semibold text-blue-300 group-hover:text-blue-200 transition">
                    {contact.label}
                  </h3>
                </div>
                <p className="text-slate-300 text-sm">{contact.value}</p>
              </motion.a>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          <a href="/resume.pdf" download className="btn-primary inline-flex items-center gap-2">
            <FileText size={20} /> Download Resume
          </a>
        </motion.div>

        <motion.p
          className="text-slate-400 mt-12 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
        >
          Looking forward to hearing from you! Let's build something amazing together.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default Contact;
