import { motion } from "framer-motion";

const educationData = [
  {
    degree:
      "Bachelor of Science in Computer Science and Information Technology (BSc CSIT)",
    institution: "Butwal Multiple Campus, Tribhuvan University",
    duration: "2079 - Present",
  },
  {
    degree: "+2 Science (Technical)",
    institution: "Kalika Manavgyan School, Nepal",
    duration: "2076-2079 B.S.",
  },
];

const Education = () => {
  return (
    <div className="space-y-6">
      <h3 className="text-2xl font-bold border-b-2 border-[#FF6600] inline-block mb-4">
        Education
      </h3>

      {educationData.map((edu, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="relative pl-6 border-l-2 border-gray-200 hover:border-[#FF6600] transition-colors"
        >
          {/* Timeline Dot */}
          <div className="absolute -left-2.25 top-1 w-4 h-4 bg-white border-2 border-[#FF6600] rounded-full" />

          <h4 className="text-lg font-bold text-black">{edu.degree}</h4>
          <p className="text-gray-600 font-medium">{edu.institution}</p>
          <span className="text-sm text-[#FF6600] font-bold">
            {edu.duration}
          </span>
        </motion.div>
      ))}
    </div>
  );
};

export default Education;
