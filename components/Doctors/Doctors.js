"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";

// Mock data for doctors
const doctors = [
  {
    id: 1,
    name: "Dr. S.I.M. Khairun Nabi Khan",
    designation:
      "Neuro Surgeon & Spine Surgeon, Associate Professor, Department of...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
    category: "Hair Transplant Surgeon",
  },
  {
    id: 2,
    name: "Professor. Dr. Bimal Chandra Shil",
    designation:
      "Specialist in Medicine, Gastrointestinal & Liver Diseases Ex...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc2.jpg",
    category: "Laser and Cosmetic Surgeon",
  },
  {
    id: 3,
    name: "Dr. A.F.M. Kamal Uddin",
    designation: "Oncologist",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc3.jpg",
    category: "Laser Surgeon",
  },
  {
    id: 4,
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
    category: "Laser and Aesthetic Surgeon",
  },
];

const Doctors = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state

  const categories = [
    "All",
    "Hair Transplant Surgeon",
    "Laser and Cosmetic Surgeon",
    "Laser Surgeon",
    "Laser and Aesthetic Surgeon",
  ];

  // Filter doctors by selected category and search term
  const filteredDoctors = doctors.filter((doctor) => {
    const matchesCategory =
      selectedCategory === "All" || doctor.category === selectedCategory;
    const matchesSearch =
      doctor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      doctor.designation.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleClearSearch = () => {
    setSearchTerm(""); // Clear the search input
    setIsSearchVisible(true); // Show all options
  };

  return (
    <section className="py-12 bg-gray-50 md:pt-24 pt-20">
      <div className="md:flex">
        {/* Sidebar for Category Filter */}
        <div
          className={`fixed inset-y-0  top-20 left-0 z-30 transform bg-gray-100 p-4 transition-transform md:static md:translate-x-0 md:w-1/4 ${
            isSidebarOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <h2 className="text-2xl font-semibold mb-4">Filter by Category</h2>
          <ul className="space-y-2">
            {categories.map((category) => (
              <li key={category}>
                <button
                  onClick={() => handleCategoryChange(category)}
                  className={`w-full text-left px-4 py-2 rounded ${
                    selectedCategory === category
                      ? "bg-[#825f8d] text-white"
                      : "bg-gray-200 text-gray-700"
                  }`}
                >
                  {category}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Main Content */}
        <div className="w-full md:w-3/4 px-6 py-6 bg-gray-50 min-h-screen">
          <div className="flex md:justify-between mb-6 flex-col md:flex-row">
            <div className="flex md:mb-0 mb-5 justify-between items-center">
              <h1 className="text-3xl font-bold text-gray-800">
                Meet Our Doctors
              </h1>
              <button
                className="block md:hidden text-gray-700 focus:outline-none text-3xl"
                onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              >
                {isSidebarOpen ? (
                  <IoClose className="text-[#825f8d] text-2xl" />
                ) : (
                  <IoIosMenu className="text-[#825f8d] text-2xl" />
                )}
              </button>
            </div>
            <div className="flex justify-center items-center">
              <input
                type="text"
                placeholder="Search doctors"
                value={searchTerm}
                onChange={handleSearchChange}
                className="w-full md:w-52 p-2 border border-[#825f8d] rounded"
                />
                {searchTerm && (
                <button
                  onClick={handleClearSearch}
                  className="ml-2 text-red-500 hover:text-red-700"
                >
                  Clear
                </button>
              )}
              {/* Burger Menu for Small Screens */}
            </div>

            
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {filteredDoctors.map((doctor) => (
              <Link key={doctor.id} href={`/doctors/${doctor.id}`}>
                <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                  {/* Doctor Image */}
                  <Image
                    src={doctor.image}
                    alt={doctor.name}
                    width={200}
                    height={100}
                    className="w-full h-72 object-cover rounded-t-lg"
                  />
                  {/* Doctor Details */}
                  <div className="p-4">
                    <h3 className="text-lg font-bold text-gray-800 mb-2">
                      {doctor.name}
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      {doctor.designation}
                    </p>
                    <p className="text-sm font-medium text-green-700">
                      {doctor.hospital}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Doctors;
