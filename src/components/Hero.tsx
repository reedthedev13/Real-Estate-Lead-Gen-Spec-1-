import { useState } from "react";
import { motion } from "framer-motion";

export default function Hero() {
  const [imgLoaded, setImgLoaded] = useState(false);

  return (
    <section className="bg-[#F8F4EF] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        {/* Left Text Section */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={imgLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-[#1F1F1F] leading-tight">
            Find Your Dream Home with a Trusted Local Expert
          </h1>

          <p className="text-lg text-[#4A4643] max-w-md">
            Personalized guidance, market expertise, and dedicated support;
            helping buyers and sellers achieve their goals with confidence.
          </p>

          <motion.a
            href="#contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-block bg-[#7E6B8B] text-white px-8 py-4 rounded-lg font-semibold shadow-md hover:shadow-lg transition-all"
          >
            Get a Free Consultation
          </motion.a>
        </motion.div>

        {/* Right Photo */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={imgLoaded ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="relative w-full flex justify-center"
        >
          <div className="bg-white shadow-lg rounded-2xl p-4 md:p-6 border border-[#E6E2DD]">
            <img
              src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1287&auto=format&fit=crop&ixlib=rb-4.1.0"
              alt="Real Estate Agent"
              className="rounded-xl object-cover w-full h-[380px] md:h-[450px]"
              loading="lazy"
              decoding="async"
              onLoad={() => setImgLoaded(true)}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
