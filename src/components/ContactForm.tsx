import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    // TEMP — You can integrate backend later
    console.log("Lead captured.");
  };

  return (
    <section id="contact" className="bg-[#F8F4EF] py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-4xl mx-auto">
        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-[#1F1F1F] mb-8 text-center"
        >
          Get Your Free Home Consultation
        </motion.h2>

        {/* Subheading */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.45, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-center text-[#4A4643] mb-12 max-w-2xl mx-auto"
        >
          Whether you're buying or selling, get expert guidance tailored to your
          goals.
        </motion.p>

        {/* Form */}
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
          viewport={{ once: true }}
          className="bg-white p-10 rounded-2xl shadow-lg border border-[#E6E2DD] space-y-6"
        >
          {/* Name */}
          <div>
            <label className="block text-[#4A4643] font-medium mb-1">
              Full Name
            </label>
            <input
              required
              type="text"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F8F4EF] focus:outline-none focus:ring-2 
                         focus:ring-[#7E6B8B] transition"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block text-[#4A4643] font-medium mb-1">
              Email Address
            </label>
            <input
              required
              type="email"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F8F4EF] focus:outline-none focus:ring-2 
                         focus:ring-[#7E6B8B] transition"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block text-[#4A4643] font-medium mb-1">
              Phone Number
            </label>
            <input
              required
              type="tel"
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F8F4EF] focus:outline-none focus:ring-2 
                         focus:ring-[#7E6B8B] transition"
            />
          </div>

          {/* Message */}
          <div>
            <label className="block text-[#4A4643] font-medium mb-1">
              Message
            </label>
            <textarea
              rows={4}
              required
              className="w-full p-3 border border-[#D9CFC3] rounded-lg bg-[#F8F4EF] focus:outline-none focus:ring-2 
                         focus:ring-[#7E6B8B] transition"
            />
          </div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="w-full bg-[#7E6B8B] text-white py-4 rounded-lg font-semibold shadow-md hover:shadow-lg 
                       transition-all"
          >
            Submit Request
          </motion.button>

          {/* Success Message */}
          {submitted && (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center text-green-700 font-medium mt-4"
            >
              Thank you! I’ll be in touch shortly.
            </motion.p>
          )}
        </motion.form>
      </div>
    </section>
  );
}
