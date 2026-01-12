import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ecommerce from "../assets/projects/ecommerce1.png";
import rojgaarhub from "../assets/projects/jobseeking.png";
import portfolio from "../assets/projects/portfolio1.png";
// ... imports for images ...

const Projects = () => {
  const projectData = [
    {
      title: "E-Commerce",
      image: ecommerce,
      description:
        "A full-stack E-Commerce website with custom JWT authentication and Redux state management.",
      tags: [
        "React",
        "Tailwindcss",
        "Node.js",
        "Express",
        "MongoDB",
        "Redux",
        "JWT",
      ],
      demo: "https://ecommerce-demo.com",
      github: "https://github.com/yourusername/ecommerce",
    },
    {
      title: "Job Seeking Portal (RojgaarHub)",
      image: rojgaarhub,
      description:
        "An online portal for job search, applications, and recruitment management.",
      tags: ["Next.js", "Chart.js"],
      demo: "https://rojgaarhub-jobseekingportal.netlify.app",
      github: "https://github.com/shubhamgyawali7/job_seeking.git",
    },
    {
      title: "Own Portfolio",
      image: portfolio,
      description:
        "A modern portfolio website built with React and smooth animations.",
      tags: ["React", "Tailwindcss", "Framer Motion"],
      demo: "https://shubhamgyawali.me",
      // github: "https://github.com/yourusername/portfolio",
    },
  ];

  return (
    <section id="projects" className="py-24 bg-white px-6 md:px-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-black italic">
            SELECTED <span className="text-[#FF6600]">WORKS.</span>
          </h2>
          <div className="w-24 h-2 bg-black mt-4"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projectData.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
