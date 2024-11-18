import Image from "next/image";
import LanguageSwitcher from "@/components/LanguageSwitcher/LanguageSwitcher";
import labaidlogo from "@/public/images/labaidlogo.jpg"
export default function Navbar() {
  return (
    <header className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Image src={labaidlogo} width={200} height={200}/>
        

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-4 text-[#825f8d] font-semibold text-base">
            <li><a href="#services" className=" hover:text-[#514655]">Services</a></li>
            <li><a href="#about" className=" hover:text-[#514655]">About Us</a></li>
            <li><a href="#contact" className=" hover:text-[#514655]">Contact</a></li>
          </ul>
        </nav>

        {/* Language Switcher */}
        <LanguageSwitcher />
      </div>
    </header>
  );
}
