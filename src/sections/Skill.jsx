import React from "react";
import SkillBadge from "../components/SkillBadge";
import { motion } from "motion/react"; // Latest 2026 import

const Skill = () => {
  const skills = [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Tailwind CSS",
    "Node.js",
    "Express",
    "MongoDB",
    "Next.js",
  ];

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
        {/* Changed gap-30 to gap-4 for better spacing */}
        <div className="flex flex-wrap gap-9">
          {skills.map((skill, index) => (
            <SkillBadge key={skill} name={skill} index={index} />
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Skill;
