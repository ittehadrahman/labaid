"use client";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation"; // Import useRouter

export default function Hero() {
  const router = useRouter(); // Initialize the router

  return (
    <section
      className="relative text-[white] text-center py-20 bg-cover bg-center md:min-h-[600px] pt-32"
      style={{
        backgroundImage: `url('/images/background.jpeg')`,
      }}
    >
      {/* Overlay for Blur Effect */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

      {/* Content with Animation */}
      <motion.div
        className="relative z-10"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1 className="text-2xl md:text-4xl font-bold mb-4 md:mt-40">
          Welcome to Labaid Aesthetic & Laser Lounge
        </h1>
        <p className="mb-6 md:text-lg">
          Your destination for premium aesthetic treatments and laser services.
        </p>
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="md:px-6 md:py-3 px-4 py-3 bg-white text-[#825f8d] font-semibold rounded hover:text-white hover:bg-[#825f8d] transition-all ease-in-out"
          onClick={() => router.push('/contact')} // Navigate to /contact
        >
          Contact Us
        </motion.button>
      </motion.div>
    </section>
  );
}
