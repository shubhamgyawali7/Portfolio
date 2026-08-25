import React from "react";
import SkillBadge from "../components/SkillBadge";
import { motion } from "motion/react"; // Latest 2026 import

const skillCategories = [
  {
    name: "Languages",
    skills: ["JavaScript (ES6+)", "SQL", "HTML", "CSS"],
  },
  {
    name: "Backend",
    skills: ["Node.js", "Express.js", "RESTful APIs", "JWT Authentication"],
  },
  {
    name: "Frontend & Frameworks",
    skills: ["React.js", "Next.js", "Redux", "Tailwind CSS"],
  },
  {
    name: "Databases",
    skills: ["MongoDB", "Supabase", "PostgreSQL (Neon)"],
  },
  {
    name: "Tools",
    skills: ["Git", "GitHub", "Postman"],
  },
];

const Skill = () => {
  let globalIndex = 0;

  return (
    <section id="skills" className="py-24 bg-white px-6 max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h3 className="text-2xl font-black mb-10 text-black uppercase tracking-tighter border-l-4 border-brand-orange pl-4">
          My Tech Stack
        </h3>
        <div className="space-y-8">
          {skillCategories.map((category) => (
            <div key={category.name}>
              <h4 className="text-sm font-bold text-black uppercase tracking-wider mb-4 pl-1">
                {category.name}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill) => {
                  const currentIndex = globalIndex++;
                  return (
                    <SkillBadge
                      key={skill}
                      name={skill}
                      index={currentIndex}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
