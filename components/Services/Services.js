"use client";
import { useState } from "react";
import Image from "next/image";
import laserIcon from "@/public/images/img.png";
import { IoIosMenu } from "react-icons/io";
import { IoClose } from "react-icons/io5";
export default function LaserServices() {
  const services = [
    {
      id: 1,
      name: "Laser Hair Removal",
      description:
        "Safe and effective laser treatment to remove unwanted hair.",
      price: "150",
      location: "Dhaka, Bangladesh",
      rating: 4.8,
      reviews: 95,
      verified: true,
      featured: true,
      category: "Hair Removal",
    },
    {
      id: 2,
      name: "Skin Rejuvenation",
      description:
        "Rejuvenate your skin and reduce fine lines with advanced laser technology.",
      price: "200",
      location: "Chittagong, Bangladesh",
      rating: 4.7,
      reviews: 82,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 3,
      name: "Tattoo Removal",
      description:
        "Remove unwanted tattoos with minimal scarring using our laser technology.",
      price: "250",
      location: "Sylhet, Bangladesh",
      rating: 4.6,
      reviews: 75,
      verified: true,
      category: "Tattoo Removal",
    },
    {
      id: 4,
      name: "Acne Scar Treatment",
      description:
        "Reduce acne scars effectively with our advanced laser therapy.",
      price: "180",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 88,
      verified: true,
      featured: true,
      category: "Skin Treatment",
    },
    {
      id: 5,
      name: "Pigmentation Treatment",
      description:
        "Treat pigmentation and even out your skin tone with safe laser technology.",
      price: "220",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 70,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 6,
      name: "Vascular Lesion Treatment",
      description:
        "Effectively remove vascular lesions with precision laser therapy.",
      price: "240",
      location: "Sylhet, Bangladesh",
      rating: 4.4,
      reviews: 65,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 7,
      name: "Wrinkle Reduction",
      description:
        "Smoothen wrinkles and fine lines with advanced laser procedures.",
      price: "230",
      location: "Dhaka, Bangladesh",
      rating: 4.6,
      reviews: 78,
      verified: true,
      category: "Skin Treatment",
    },
    {
      id: 8,
      name: "Stretch Mark Removal",
      description: "Minimize stretch marks with non-invasive laser treatments.",
      price: "250",
      location: "Chittagong, Bangladesh",
      rating: 4.5,
      reviews: 72,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 9,
      name: "Laser Mole Removal",
      description: "Quick and safe mole removal with minimal downtime.",
      price: "200",
      location: "Sylhet, Bangladesh",
      rating: 4.8,
      reviews: 90,
      verified: true,
      category: "Specialized Treatment",
    },
    {
      id: 10,
      name: "Freckle Removal",
      description:
        "Reduce freckles effectively using state-of-the-art laser technology.",
      price: "210",
      location: "Dhaka, Bangladesh",
      rating: 4.7,
      reviews: 85,
      verified: true,
      category: "Skin Treatment",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [currentPage, setCurrentPage] = useState(1);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar toggle state
  const [servicesPerPage, setServicesPerPage] = useState(10);

  const categories = [
    "All",
    ...new Set(services.map((service) => service.category)),
  ];

  const filteredServices = services.filter(
    (service) =>
      (selectedCategory === "All" || service.category === selectedCategory) &&
      service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredServices.length / servicesPerPage);

  const currentServices = filteredServices.slice(
    (currentPage - 1) * servicesPerPage,
    currentPage * servicesPerPage
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1); // Reset to the first page on category change
  };
  const handleServicesPerPageChange = (e) => {
    setServicesPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to the first page on per-page change
  };
  return (
    <div className="flex md:pt-24 pt-20">
      {/* Sidebar */}
      <div
        className={`fixed inset-y-0 left-0 z-30 top-20 transform bg-gray-100 p-4 transition-transform md:static md:translate-x-0 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full"
        } md:w-1/4`}
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
        <div className="md:flex gap-14 justify-between items-center mb-4">
          <div className="flex justify-between items-center mb-5 md:mb-0">
            <h1 className="text-2xl md:text-4xl font-bold text-start ">
              Services
            </h1>
            {/* Burger Menu for Small Screens */}
            <button
              className="block md:hidden text-gray-700 focus:outline-none tex-3xl"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            >
              {isSidebarOpen ? (
                <IoClose className="text-[#825f8d] text-2xl md:text-4xl " />
              ) : (
                <IoIosMenu className="text-[#825f8d] text-2xl md:text-4xl " />
              )}
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative w-full max-w-md">
            <input
              type="text"
              placeholder="Search services..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-2 py-1 md:px-4 md:py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#825f8d] text-gray-700"
            />
            {searchTerm && (
              <button
                onClick={() => setSearchTerm("")}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                ✖
              </button>
            )}
          </div>
        </div>
        {/* Services Per Page Dropdown */}
        <div className="flex w-full justify-end mb-4">
          <div className="w-20 max-w-sm">
            <select
              id="servicesPerPage"
              value={servicesPerPage}
              onChange={handleServicesPerPageChange}
              className="w-full px-2 py-1 md:px-4 md:py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#825f8d] text-gray-700"
            >
              <option value="10">10</option>
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
          </div>
        </div>

        {/* Services List */}
        <div className="grid gap-6">
          {currentServices.length > 0 ? (
            currentServices.map((service) => (
              <div
                key={service.id}
                className="p-4 bg-white rounded-lg shadow-md border"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
                  {/* Image */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
                    <div className="flex justify-center mb-4 md:mb-0">
                      <Image
                        src={laserIcon}
                        width={80}
                        height={60}
                        alt={service.name}
                        className="rounded-full"
                      />
                    </div>

                    {/* Name, Location, and Description */}
                    <div className="flex flex-col text-center md:text-left md:ml-4">
                      <h2 className="text-lg md:text-xl font-bold">
                        {service.name}
                      </h2>
                      <div className="text-xs md:text-sm text-gray-600">
                        {service.location}
                      </div>
                      <p className="mb-2 text-gray-800 text-sm md:text-base">
                        {service.description}
                      </p>
                    </div>
                  </div>

                  {/* Price */}
                  <div className="text-gray-600 font-semibold items-center text-center mt-2 md:mt-0">
                    Tk {service.price} per session
                  </div>
                </div>

                <div className="mt-4 flex justify-center md:justify-start">
                  <div className="flex items-center justify-start md:justify-start space-x-2">
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
                        Offer
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-500">No services found.</p>
          )}
        </div>

        {/* Pagination */}
        {filteredServices.length > servicesPerPage && (
          <div className="mt-8 flex justify-center items-center space-x-2">
            {/* Previous Arrow */}
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`md:px-3 md:py-2 px-2 py-1 rounded ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-700"
              }`}
            >
              &laquo;
            </button>

            {/* Pagination Numbers */}
            <div className="flex space-x-2">
              {Array.from({ length: totalPages }, (_, index) => index + 1)
                .filter((page) => {
                  const isEdgePage = page === 1 || page === totalPages;
                  const isAroundCurrent = Math.abs(page - currentPage) <= 1;
                  return isEdgePage || isAroundCurrent;
                })
                .reduce((acc, page, index, array) => {
                  const lastPage = acc[acc.length - 1];
                  if (lastPage && page - lastPage > 1) {
                    acc.push("dots");
                  }
                  acc.push(page);
                  return acc;
                }, [])
                .map((page, index) =>
                  page === "dots" ? (
                    <span
                      key={`dots-${index}`}
                      className="px-2 text-gray-500 select-none"
                    >
                      ...
                    </span>
                  ) : (
                    <button
                      key={page}
                      onClick={() => handlePageChange(page)}
                      className={`md:px-3 md:py-2 px-2 py-1 rounded ${
                        currentPage === page
                          ? "bg-[#825f8d] text-white"
                          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
                      }`}
                    >
                      {page}
                    </button>
                  )
                )}
            </div>

            {/* Next Arrow */}
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`md:px-3 md:py-2 px-2 py-1 rounded ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-300 hover:bg-gray-400 text-gray-700"
              }`}
            >
              &raquo;
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
