import { motion } from "framer-motion";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const sendPromise = emailjs.sendForm(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      form.current,
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    toast.promise(sendPromise, {
      pending: "Sending your message...📧",
      success: {
        render() {
          e.target.reset(); // Clear form after success
          return "Message sent Successfully!.";
        },
        icon: "🚀",
        style: {
          backgroundColor: "#FF6600",
          color: "#white",
          fontWeight: "bold",
        },
      },
      error: {
        render({ data }) {
          return `Failed: ${data.text || "Check your connection"}`;
        },
        icon: "❌",
        style: {
          backgroundColor: "#000000",
          color: "#white",
          fontWeight: "bold",
        },
      },
    });
  };

  return (
    <section id="contact" className="py-24 bg-white px-6 text-black">
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />

      <div className="max-w-3xl mx-auto border-4 border-black p-10 rounded-3xl shadow-[15px_15px_0px_0px_#FF6600]">
        <h2 className="flex items-center justify-center text-4xl font-black mb-8 flex-wrap gap-4">
          START A <span className="text-[#FF6600]">PROJECT.</span>
        </h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div className="grid md:grid-cols-2 gap-6">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              required
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Email"
              required
              className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all"
            />
          </div>
          <textarea
            name="message"
            rows="4"
            placeholder="Message"
            required
            className="w-full p-4 border-2 border-black rounded-xl focus:outline-none focus:ring-2 focus:ring-[#FF6600] focus:border-transparent transition-all"
          ></textarea>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="w-full bg-black text-white font-black py-4 rounded-xl uppercase tracking-widest hover:bg-[#FF6600] transition-colors shadow-lg"
          >
            Send Message
          </motion.button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
