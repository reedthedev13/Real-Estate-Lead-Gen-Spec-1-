import { motion } from "framer-motion";
import { listings } from "../data/listings";

export default function Listings() {
  return (
    <section className="bg-[#F8F4EF] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-10"
        >
          Featured Listings
        </motion.h2>

        {/* Scroll Container */}
        <div className="flex gap-8 overflow-x-auto snap-x snap-mandatory pb-4 md:overflow-visible md:grid md:grid-cols-3">
          {listings.map((home, i) => (
            <motion.div
              key={home.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ scale: 1.03 }}
              className="min-w-[280px] md:min-w-0 snap-start bg-white rounded-2xl shadow-lg border border-[#E6E2DD] overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl"
            >
              {/* Property Image */}
              <img
                src={home.image}
                alt={home.location}
                className="h-52 w-full object-cover transition-transform duration-300 hover:scale-105"
              />

              {/* Info */}
              <div className="p-5 space-y-3">
                <p className="text-2xl font-semibold text-[#1F1F1F]">
                  {home.price}
                </p>

                <p className="text-[#4A4643] font-medium">
                  {home.beds} Beds • {home.baths} Baths • {home.sqft} sq ft
                </p>

                <p className="text-[#7E6B8B] font-semibold">{home.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
