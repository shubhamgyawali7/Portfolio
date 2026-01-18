import { motion } from "framer-motion";
import Education from "../components/Education";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 bg-white px-6 md:px-20 border-b-2 border-black"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        {/* LEFT SIDE: Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col justify-center"
        >
          <h2 className="text-5xl text-black md:text-4xl font-black mb-8 leading-none">
            WHO <br />
            <span className="text-5xl text-[#FF6600]  md:text-7xl">I AM</span>
            <img
              src="/logo/my-logo1.png"
              alt="Portfolio Logo"
              className="h-12 w-12  mb-6 inline-block ml-4 rounded-full border-2 border-black object-cover"
            />
          </h2>

          <div className="space-y-4 text-gray-700 text-lg md:text-xl font-medium leading-relaxed">
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              I am a BSc CSIT student with a keen interest in web development
              and modern technologies. I focus on building efficient and
              practical web applications that solve real-world problems.
            </p>

            <p className="text-gray-600 text-lg leading-relaxed">
              My interests lie in building responsive user interfaces,
              developing full-stack applications, and continuously learning new
              tools and frameworks. I aim to grow as a software developer while
              contributing to meaningful projects that create real impact.
            </p>
          </div>

          {/* CTA Button for Bio side */}
          <div className="mt-10">
            <a
              href="/resumeFile/Myself_Resume.pdf"
              download="Shubham-Gyawali_Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <button className="bg-black text-white px-10 py-4 font-bold uppercase rounded-xl shadow-[6px_6px_0px_0px_rgba(255,102,0,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all">
                Download CV
              </button>
            </a>
          </div>
        </motion.div>

        {/* RIGHT SIDE: Education Component */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="bg-[#fafafa] p-10 rounded-2xl border-2 border-black shadow-[10px_10px_0px_0px_rgba(0,0,0,1)]"
        >
          <Education />
        </motion.div>
      </div>
    </section>
  );
};

export default About;
