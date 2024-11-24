"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import labaidlogo from "@/public/images/labaidlogo.jpg";
import { IoIosMenu } from "react-icons/io";
import { IoMdClose } from "react-icons/io";
import Link from "next/link";
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        // Close the menu if the screen size is larger than md (768px)
        setIsMenuOpen(false);
      }
    };

    // Add event listener for resize
    window.addEventListener("resize", handleResize);

    // Call it once to handle the current size on load
    handleResize();

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <header className="bg-white text-black md:p-4 p-2 fixed top-0 left-0 right-0 z-50 shadow-md">
        <div className="mx-4 lg:mx-20 flex justify-between items-center">
          <Link href={`/`}>
          <Image
            src={labaidlogo}
            width={200}
            height={200}
            alt="Labaid Aesthetic"
            />
            </Link>

          {/* Burger Icon */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 focus:outline-none hover:rounded-full hover:border-[#825f8d] border border-transparent transition-all ease-in-out"
          >
            <IoIosMenu className="text-[#825f8d] text-4xl " />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:block">
            <ul className="flex space-x-4 text-[#825f8d] font-semibold text-xl">
              <li>
                <a href="/" className="hover:text-[#514655]">
                  Home
                </a>
              </li>
              <li>
                <a href="/offers" className="hover:text-[#514655]">
                  Offers
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-[#514655]">
                  Services
                </a>
              </li>
              <li>
                <a href="/doctors" className="hover:text-[#514655]">
                  Doctors
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:text-[#514655]">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed inset-0 z-40 bg-black/50 ${isMenuOpen ? "block" : "hidden"}`}
        onClick={closeMenu}
      ></div>
      <div
        className={`fixed top-0 left-0 bottom-0 z-50 bg-white w-2/3 sm:w-1/3 transform duration-300 ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <button
          onClick={closeMenu}
          className="absolute top-4 right-4 text-[#825f8d] focus:outline-none hover:rounded-full hover:border-[#825f8d] border border-transparent transition-all ease-in-out"
        >
          <IoMdClose className="text-[#825f8d] text-4xl" />
        </button>
        <ul className="flex flex-col space-y-1 text-[#825f8d] font-semibold text-xl mt-14 text-center">
          <a href="/" className="" onClick={closeMenu}>
            <li className="hover:bg-[#514655] hover:text-white h-10 flex justify-center items-center">
              Home
            </li>
          </a>
          <a href="/offers" className="" onClick={closeMenu}>
            <li className="hover:bg-[#514655] hover:text-white h-10 flex justify-center items-center">
              Offers
            </li>
          </a>
          <a href="/services" className="" onClick={closeMenu}>
            <li className="hover:bg-[#514655] hover:text-white h-10 flex justify-center items-center">
              Services
            </li>
          </a>
          <a href="/doctors" className="" onClick={closeMenu}>
            <li className="hover:bg-[#514655] hover:text-white h-10 flex justify-center items-center">
              Doctors
            </li>
          </a>
          <a href="/contact" className="" onClick={closeMenu}>
            <li className="hover:bg-[#514655] hover:text-white h-10 flex justify-center items-center">
              Contact
            </li>
          </a>
        </ul>
      </div>
    </>
  );
}
