"use client";
import { useState } from "react";
import Image from "next/image";
import laserIcon from "@/public/images/agro.jpg";

export default function LaserServices() {
  const services = [
    {
      id: 1,
      name: "Laser Hair Removal",
      description:
        "Safe and effective laser treatment to remove unwanted hair.",
      price: "$150 per session",
      location: "Dhaka, Bangladesh",
      rating: 4.8,
      reviews: 95,
      verified: true,
      featured: true,
    },
    {
      id: 2,
      name: "Skin Rejuvenation",
      description:
        "Rejuvenate your skin and reduce fine lines with advanced laser technology.",
      price: "$200 per session",
      location: "Chittagong, Bangladesh",
      rating: 4.7,
      reviews: 82,
      verified: true,
    },
    {
      id: 3,
      name: "Tattoo Removal",
      description:
        "Remove unwanted tattoos with minimal scarring using our laser technology.",
      price: "$250 per session",
      location: "Sylhet, Bangladesh",
      rating: 4.6,
      reviews: 75,
      verified: true,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="px-2 md:px-20 py-6 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold text-center mb-4">Services</h1>

      {/* Search Bar */}
      <div className="mb-8 flex justify-end">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full max-w-md px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#825f8d] text-gray-700"
        />
      </div>

      {/* Services List */}
      <div className="grid gap-6">
        {filteredServices.length > 0 ? (
          filteredServices.map((service) => (
            <div
              key={service.id}
              className="p-4 bg-white rounded-lg shadow-md border"
            >
              <div className="flex items-center mb-4">
                <Image
                  src={laserIcon}
                  width={60}
                  height={60}
                  alt={service.name}
                  className="rounded-full"
                />
                <div className="ml-4">
                  <h2 className="text-xl font-bold">{service.name}</h2>
                  <div className="text-sm text-gray-600">
                    {service.location}
                  </div>
                </div>
              </div>
              <p className="mb-2 text-gray-800">{service.description}</p>
              <p className="text-gray-600 font-semibold">{service.price}</p>

              <div className="mt-4 flex items-center justify-between">
                <div className="flex items-center space-x-2">
                  <span
                    className={`px-2 py-1 text-sm font-semibold rounded ${
                      service.verified
                        ? "bg-green-100 text-green-800"
                        : "bg-gray-100 text-gray-800"
                    }`}
                  >
                    Verified
                  </span>
                  {service.featured && (
                    <span className="px-2 py-1 text-sm font-semibold rounded bg-yellow-100 text-yellow-800">
                      Featured
                    </span>
                  )}
                </div>
                <div className="text-sm text-gray-500">
                  ⭐ {service.rating}/5 ({service.reviews} Reviews)
                </div>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500">No services found.</p>
        )}
      </div>
    </div>
  );
}
