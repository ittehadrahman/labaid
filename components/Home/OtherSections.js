"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { FiExternalLink } from "react-icons/fi";
import { motion } from "framer-motion";

const OtherSections = () => {
  const data = [
    {
      type: "HEALTH",
      title: "Labaid Diagnostic",
      image: "/images/labaid-diagnostic.jpg",
      link: "https://labaid.com.bd",
    },
    {
      type: "HEALTH",
      title: "Labaid Cardiac Hospital",
      image: "/images/labaid-cardiac.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "HEALTH",
      title: "Labaid Specialized Hospital",
      image: "/images/labaid-specialized.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "HEALTH",
      title: "Labaid Cancer Hospital",
      image: "/images/labaid-cancer.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "PHARMACEUTICALS",
      title: "Labaid Pharmaceuticals",
      image: "/images/pharma.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "EDUCATION",
      title: "State University of Bangladesh",
      image: "/images/SUB.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "EDUCATION",
      title: "State University of Health Sciences",
      image: "/images/SUHS.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "REAL ESTATE",
      title: "Labaid Properties",
      image: "/images/properties.jpg",
      link: "https://labaid-diagnostic.com",
    },
    {
      type: "AGRO",
      title: "Labaid Agro",
      image: "/images/agro.jpg",
      link: "https://labaid-diagnostic.com",
    },
  ];

  const tabs = [
    "HEALTH",
    "PHARMACEUTICALS",
    "EDUCATION",
    "REAL ESTATE",
    "AGRO",
  ];

  const [selectedTab, setSelectedTab] = useState("HEALTH");

  const filteredData = data.filter((item) => item.type === selectedTab);

  return (
    <section className="py-10 bg-white">
      <div className="md:mx-20 px-4">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-lg font-semibold text-gray-500 text-center">
            MEET OUR SISTER CONCERNS
          </h2>
          <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">
            Labaid Group
          </h1>
        </motion.div>

        {/* Tabs */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="flex flex-col lg:flex-row space-x-0 lg:space-x-4 mb-8"
        >
          {tabs.map((tab) => (
            <motion.button
              key={tab}
              whileHover={{ scale: 1.1 }}
              className={`px-6 py-2 rounded shadow mb-2 lg:mb-0 ${
                selectedTab === tab
                  ? "bg-[#825f8d] text-white hover:bg-[#4a3651]"
                  : "border border-gray-300 hover:bg-gray-100"
              }`}
              onClick={() => setSelectedTab(tab)}
            >
              {tab}
            </motion.button>
          ))}
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.6 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {filteredData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ scale: 0.95 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
              className="relative group bg-white border rounded shadow p-4 text-center overflow-hidden"
            >
              <Image
                src={item.image}
                alt={item.title}
                width={150}
                height={150}
                className="mx-auto mb-4"
              />
              <motion.div
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
                className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center z-100"
              >
                <Link
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="text-white text-3xl bg-[#4a3651] p-4 rounded-full hover:bg-[#4a3651]">
                    <FiExternalLink />
                  </div>
                </Link>
              </motion.div>
              <h3 className="text-lg font-medium">{item.title}</h3>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default OtherSections;
