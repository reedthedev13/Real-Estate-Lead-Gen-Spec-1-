import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="bg-[#F1ECE6] border-t border-[#E6E2DD] py-10 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
      >
        {/* Left: Agent Info */}
        <div className="text-center md:text-left space-y-1">
          <p className="text-xl font-semibold text-[#1F1F1F]">
            Michael Anderson, Realtor®
          </p>
          <p className="text-[#4A4643]">Serving the Greater Metro Area</p>
        </div>

        {/* Middle: Contact */}
        <div className="text-center md:text-right space-y-1">
          <p className="text-[#4A4643] font-medium">📞 (555) 123-4567</p>
          <p className="text-[#4A4643] font-medium">
            ✉️ michael.anderson@homes.com
          </p>
        </div>

        {/* Right: Socials */}
        <div className="flex gap-5 text-[#7E6B8B] text-2xl">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:opacity-70 transition"
          >
            <i className="fa-brands fa-instagram"></i>
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:opacity-70 transition"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a
            href="#"
            aria-label="LinkedIn"
            className="hover:opacity-70 transition"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </motion.div>

      {/* Bottom strip */}
      <div className="text-center mt-8 text-[#7E6B8B] text-sm">
        © {new Date().getFullYear()} Michael Anderson — All Rights Reserved.
      </div>
    </footer>
  );
}
