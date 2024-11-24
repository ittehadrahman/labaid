"use client";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

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
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
  },
  {
    name: "Professor Dr. Afzalunnessa Chowdhury",
    designation: "Gynecologist, Obstetrician & Laparoscopic Surgeon, Former...",
    hospital: "LABAID Specialized Hospital",
    image: "/images/doc1.jpg",
  },
];

const DoctorsSection = () => {
  return (
    <section className="py-12 bg-gray-50">
      <div className="md:mx-20 px-6">
        <h2 className="text-lg font-semibold text-gray-500 uppercase text-center">
          MEET OUR EXPERIENCED TEAM
        </h2>
        <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">
          Our Dedicated Doctors Team
        </h1>
        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{
            delay: 3000, // Delay between transitions in milliseconds
            disableOnInteraction: false, // Keeps autoplay running even after user interaction
          }}
          loop={true} // Enables looping
          spaceBetween={50}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 4 },
          }}
        >
          {doctors.map((doctor, index) => (
            <SwiperSlide key={index}>
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
            </SwiperSlide>
          ))}
        </Swiper>
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
