"use client";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import { useRouter } from "next/navigation";
import laserIcon from "@/public/images/img.png";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";
const services = [
  {
    id: 1,
    name: "Laser Hair Removal",
    description: "Safe and effective laser treatment to remove unwanted hair.",
    price: "150",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 2,
    name: "Skin Rejuvenation",
    description: "Rejuvenate your skin and reduce fine lines with advanced laser technology.",
    price: "200",
    location: "Chittagong, Bangladesh",
  },
  {
    id: 3,
    name: "Tattoo Removal",
    description: "Remove unwanted tattoos with minimal scarring using our laser technology.",
    price: "250",
    location: "Sylhet, Bangladesh",
  },
  {
    id: 4,
    name: "Scar Removal",
    description: "Advanced scar removal techniques to restore skin texture.",
    price: "180",
    location: "Dhaka, Bangladesh",
  },
  {
    id: 5,
    name: "Acne Treatment",
    description: "Effective solutions for acne and skin blemishes.",
    price: "160",
    location: "Chittagong, Bangladesh",
  },
];

const ServiceSlideshow = () => {
  const router = useRouter();

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

  const viewServices = () => {
    router.push("/services"); // Redirect to the services page
  };

  return (
        <>
      <div className="md:mx-20  flex flex-col items-center py-8 px-4  rounded-lg ">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-10">OUR SERVICES</h1>
      
      {/* Service Slider */}
      <Slider {...settings} className="w-full ">
        {services.map((service) => (
            <div key={service.id} className="p-4 ">
            <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
              <Image
                src={laserIcon}
                alt={service.name}
                width={300}
                height={200}
                className="w-full h-auto rounded-lg"
                />
              <h3 className="text-xl font-semibold text-gray-800 mt-4">{service.name}</h3>
              <p className="text-gray-600 mt-2">{service.description}</p>
              <p className="text-gray-500 mt-1">Price: Tk {service.price}</p>
              <p className="text-gray-400">{service.location}</p>
            </div>
          </div>
        ))}
      </Slider>

      {/* View Services Button */}
    </div>
    <div className="flex justify-center pb-10 pt-5">

      <Link href="/services">
            <div className="max-w-52 md:px-6 md:py-3 px-4 py-3 hover:bg-white hover:text-[#825f8d] font-semibold rounded text-white bg-[#825f8d] border border-[#825f8d] transition-all ease-in-out">
              View All Services
            </div>
          </Link>
    </div>

        </>
  );
};

export default ServiceSlideshow;
