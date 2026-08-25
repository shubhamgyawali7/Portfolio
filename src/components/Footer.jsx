import { Github, Twitter, Linkedin, Instagram, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-8 md:mb-0">
          <h2 className="text-3xl font-black">
            GET IN <span className="text-[#FF6600]">TOUCH.</span>
          </h2>
          <p className="text-gray-400 mt-2">
            Available for freelance and full-time roles.
          </p>
          <div className="flex items-center gap-4 mt-4 text-gray-400 text-sm">
            <a href="tel:+9779841942577" className="flex items-center gap-2 hover:text-[#FF6600] transition-colors">
              <Phone className="w-4 h-4" />
              +977 9841942577
            </a>
            <span className="flex items-center gap-2">
              <MapPin className="w-4 h-4" />
              Tilottama-4, Rupandehi, Nepal
            </span>
          </div>
        </div>

        <div className="flex space-x-6">
          <a
            href="https://github.com/shubhamgyawali7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="hover:text-[#FF6600] cursor-pointer transition-colors" />
          </a>

          <a
            href="https://www.instagram.com/its_me_gyawali07"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram className="hover:text-[#FF6600] cursor-pointer transition-colors" />
          </a>

          <a
            href="https://www.linkedin.com/in/shubham-gyawali-220859348"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="hover:text-[#FF6600] cursor-pointer transition-colors" />
          </a>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-gray-800 text-sm text-gray-500 flex justify-between">
        <p>© 2026 Shubham Gyawali. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
