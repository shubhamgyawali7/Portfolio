import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import ecommerce from "../assets/projects/ecommerce1.png";
import rojgaarhub from "../assets/projects/jobseeking.png";
import eventhub from "../assets/projects/eventhub/home.jpeg";
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
      demo: "https://react-ecommerce-sigma-coral.vercel.app",
      github: "https://github.com/shubhamgyawali7/react-e-commerce.git",
    },
    {
      title: "Job Seeking Portal (RojgaarHub)",
      image: rojgaarhub,
      description:
        "A secure and scalable job-seeking platform with job posting, searching, filtering, application tracking, authentication, and responsive frontend functionality.",
      tags: ["MERN Stack", "JWT", "REST APIs", "Redux", "Tailwind CSS"],
      demo: "https://rojgaarhub-jobseekingportal.netlify.app",
      github: "https://github.com/shubhamgyawali7/job_seeking.git",
    },
    {
      title: "EventHub",
      image: eventhub,
      description:
        "A full-stack IT event management platform designed to connect students with technical events and opportunities with role-based dashboards and payment integration.",
      tags: ["MERN Stack", "JWT", "eSewa", "Khalti", "Tailwind CSS"],
      demo: "https://event-hub-eight-rho.vercel.app",
      github: "https://github.com/shubhamgyawali7/EventHub.git",
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
