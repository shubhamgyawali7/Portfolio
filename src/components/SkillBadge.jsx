import { motion } from "framer-motion";

const SkillBadge = ({ name, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1, rotate: 2 }}
      className="px-5 py-3 bg-white border-2 border-black text-black font-bold rounded-lg cursor-default hover:bg-[#FF6600] hover:text-white hover:border-[#FF6600] transition-colors"
    >
      {name}
    </motion.div>
  );
};

export default SkillBadge;
