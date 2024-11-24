"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import Link from "next/link";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const doctors = [
  {
    name: "Dr. S.I.M. Khairun Nabi Khan",
    designation:
      "Neuro Surgeon & Spine Surgeon, Associate Professor, Department of...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
  },
  {
    name: "Professor. Dr. Bimal Chandra Shil",
    designation:
      "Specialist in Medicine, Gastrointestinal & Liver Diseases Ex...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc2.jpg",
  },
  {
    name: "Dr. A.F.M. Kamal Uddin",
    designation: "Oncologist",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc3.jpg",
  },
  {
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
  },
  {
    name: "Dr. Mahbuba Islam",
    designation: "Dermatologist, Skin Specialist",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc3.jpg",
  },
];

const DoctorsSection = () => {
  // Slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Show 4 doctors for large screens
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024, // For screens < 1024px
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: 768, // For screens < 768px
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: 640, // For screens < 640px
        settings: { slidesToShow: 1 },
      },
    ],
  };

  return (
    <section className="py-12 bg-gray-50">
      <div className="md:mx-20 py-8 px-4">
        <h2 className="text-lg font-semibold text-gray-500 uppercase text-center">
          MEET OUR EXPERIENCED TEAM
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Dedicated Doctors Team
        </h1>

        {/* Doctors Slider */}
        <Slider {...settings} className="w-full">
          {doctors.map((doctor, index) => (
            <div key={index} className="p-4">
              <div className="bg-white border border-gray-200 rounded-lg shadow hover:shadow-md transition-shadow duration-300">
                {/* Doctor Image */}
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  width={300}
                  height={300}
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
            </div>
          ))}
        </Slider>

        {/* View All Doctors Button */}
        <div className="mt-10 flex justify-center">
          <Link href="/doctors">
            <div className="md:px-6 md:py-3 px-4 py-3 hover:bg-white hover:text-[#825f8d] font-semibold rounded text-white bg-[#825f8d] border border-[#825f8d] transition-all ease-in-out">
              View All Doctors
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default DoctorsSection;
