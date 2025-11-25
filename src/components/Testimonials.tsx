import { motion } from "framer-motion";
import { testimonials } from "../data/testimonials";

export default function Testimonials() {
  return (
    <section className="bg-[#F8F4EF] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-12"
        >
          What Clients Are Saying
        </motion.h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-lg border border-[#E6E2DD] space-y-6 cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Client Image */}
              <div className="flex justify-center">
                <img
                  src={t.image}
                  alt={t.name}
                  className="w-20 h-20 rounded-full object-cover shadow-md transition-transform duration-300 hover:scale-105"
                />
              </div>

              {/* Quote */}
              <p className="text-[#4A4643] text-center leading-relaxed">
                “{t.quote}”
              </p>

              {/* Name */}
              <p className="text-center font-semibold text-[#1F1F1F]">
                {t.name}
              </p>

              {/* Stars */}
              <div className="flex justify-center text-[#C9A86A] text-xl">
                ★★★★★
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
