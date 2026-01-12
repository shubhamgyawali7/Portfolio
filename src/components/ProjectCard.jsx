import { motion } from "framer-motion";
import { FiGithub, FiExternalLink } from "react-icons/fi";

const ProjectCard = ({ title, description, tags, image, demo, github }) => {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      className="group bg-white border-2 border-black rounded-xl overflow-hidden shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:shadow-[8px_8px_0px_0px_rgba(255,102,0,1)] flex flex-col h-full"
    >
      {/* Project Image Container */}
      <div className="relative h-64 overflow-hidden border-b-2 border-black flex items-center justify-center p-4 bg-[#ff6702]/10">
        {image ? (
          <img
            src={image}
            alt={title}
            className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform duration-500"
          />
        ) : (
          <div className="text-gray-400 font-bold italic">Project Image</div>
        )}

        {/* Subtle overlay on hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors pointer-events-none" />
      </div>

      {/* Project Content */}
      <div className="p-6 flex flex-col grow">
        <div className="mb-4">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-xl font-black text-black uppercase tracking-tight">
              {title}
            </h3>
            
            {/* Small Action Icons */}
            <div className="flex gap-3">
              {github && (
                <a
                  href={github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#FF6600] transition-colors"
                  aria-label="GitHub Repository"
                >
                  <FiGithub size={22} />
                </a>
              )}
              {demo && (
                <a
                  href={demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-black hover:text-[#FF6600] transition-colors"
                  aria-label="Live Demo"
                >
                  <FiExternalLink size={22} />
                </a>
              )}
            </div>
          </div>
          <p className="text-gray-600 text-sm leading-relaxed">{description}</p>
        </div>

        {/* Tags - Pushed to bottom with mt-auto */}
        <div className="flex flex-wrap gap-2 mt-auto">
          {tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] font-bold uppercase px-2 py-1 bg-white border border-black text-black rounded shadow-[2px_2px_0px_0px_rgba(0,0,0,1)]"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;