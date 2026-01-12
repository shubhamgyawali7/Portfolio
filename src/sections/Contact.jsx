import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="py-24 bg-white px-6 text-black">
      <div className="max-w-3xl mx-auto border-4 border-black p-10 rounded-3xl shadow-[15px_15px_0px_0px_#FF6600]">
        <h2 className="flex items-center justify-center text-4xl font-black mb-8 flex-wrap gap-4">
          START A <span className="text-[#FF6600]">PROJECT.</span>
        </h2>
        <form className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:bg-orange-50"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:bg-orange-50"
            />
          </div>
          <textarea
            rows="4"
            placeholder="Message"
            className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:bg-orange-50"
          ></textarea>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-[#FF6600] transition-colors"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
